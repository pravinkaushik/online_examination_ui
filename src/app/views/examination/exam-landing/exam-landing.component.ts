import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { timer, Subscription } from "rxjs";
import { AlertService } from '../../../_services/alert.service';
import { ExamProcessService } from '../../../_services/exam-process.service'
import { ExamConfig } from '../../../_models/exam_config';
import { CandidateExamQuestion } from '../../../_models/candidate_exam_question';
import { AuthenticationService } from '../../../_services/authentication.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-exam-landing',
  templateUrl: './exam-landing.component.html',
  styleUrls: ['./exam-landing.component.css']
})
export class ExamLandingComponent implements OnInit {
  private exam_config: ExamConfig;
  candidateExamQuestionArr: CandidateExamQuestion[];
  loading = false;
  submitted = false;
  page = 1;
  isPreviousDisabled = true;
  isFinalPage = false;
  countDown: Subscription;
  counter = 0;
  tick = 1000;
  isFinished = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '10',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
//    uploadUrl: 'v1/image',
//    uploadUrl: 'http://127.0.0.1:5000/upload-image', 
//    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private examProcessService: ExamProcessService,
    private alertService: AlertService
    ) { 
      this.exam_config = new ExamConfig();
      this.route.paramMap.subscribe(params => {
        if(params.get('id')){
          this.exam_config.id = Number(params.get('id'));
          this.examProcessService.candidate_exam_config(this.exam_config.id)
          .pipe()
          .subscribe(
              (data: ExamConfig) => {
                this.exam_config =  data;  
                console.log(this.exam_config);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });

          this.examProcessService.get_remain_end_time(this.exam_config.id)
          .pipe()
          .subscribe(
              (data: number) => {
                this.counter =  data;  
                this.countDown = timer(0, this.tick).subscribe(() => {
                  --this.counter;
                  if(this.counter < 0){
                    this.finish();
                  }
                });
              },
              error => {
                  this.alertService.error(error, false);
                  this.loading = false;
              });
        }
      });
    }

  ngOnInit(): void {
    this.getQuestions();
//    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }

  preProcess(){
    this.candidateExamQuestionArr.forEach(function (value) {
      if(value.question_type == 1){
        if(value.radio_button_selected == 1){
          value.is_choice1_selected = 1
        }
        if(value.radio_button_selected == 2){
          value.is_choice2_selected = 1
        }
        if(value.radio_button_selected == 3){
          value.is_choice3_selected = 1
        }
        if(value.radio_button_selected == 4){
          value.is_choice4_selected = 1
        }
        if(value.radio_button_selected == 5){
          value.is_choice5_selected = 1
        } 
      }   
    }); 
  }

  saveNext(){
    this.preProcess();
    this.examProcessService.update_exam_question(this.candidateExamQuestionArr)
    .pipe()
    .subscribe(
        (data) => {
          console.log(data);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });

    this.page = this.page +1;
    this.getQuestions();
  }
  
  save(){
    this.preProcess();
    this.examProcessService.update_exam_question(this.candidateExamQuestionArr)
    .pipe()
    .subscribe(
        (data) => {
          console.log(data);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  saveFinish(){
    this.countDown.unsubscribe();
    this.preProcess();
    this.examProcessService.update_exam_question(this.candidateExamQuestionArr)
    .pipe()
    .subscribe(
        (data) => {
          console.log(data);
          this.finish();
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });


  }
  finish(){
    if(!this.isFinished){
      this.isFinished = true;
      this.countDown.unsubscribe();
      this.examProcessService.finish_exam_question(this.exam_config.id)
      .pipe()
      .subscribe(
          (data) => {
            console.log(data);
            this.alertService.success("Thanks for completing Examination", true);
            this.authenticationService.logout();
            this.router.navigate(["finish_exam"]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
    }

  }
  previous(){
    this.page = this.page - 1;
    this.getQuestions();
  }
  private getQuestions(){
    this.examProcessService.get_exam_questions(this.exam_config.id, this.page)
    .pipe()
    .subscribe(
        (data) => {
          console.log(data);
          this.candidateExamQuestionArr =  data;
          this.candidateExamQuestionArr.forEach(function (value) {
            if(value.question_type == 1){
              if(value.is_choice1_selected){
                value.radio_button_selected = 1
              }
              if(value.is_choice2_selected){
                value.radio_button_selected = 2
              }
              if(value.is_choice3_selected){
                value.radio_button_selected = 3
              }
              if(value.is_choice4_selected){
                value.radio_button_selected = 4
              }
              if(value.is_choice5_selected){
                value.radio_button_selected = 5
              }  
            }   
          }); 
          
          this.isPreviousDisabled = this.page < 2;
          this.isFinalPage = this.exam_config.total_question <= this.exam_config.question_per_page*this.page;
          console.log(this.isFinalPage);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
}
@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}