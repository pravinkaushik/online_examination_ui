import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_services/alert.service';
import {ExamProcessService} from '../../../_services/exam-process.service'
import { ExamConfig } from '../../../_models/exam_config';
import { CandidateExamQuestion } from '../../../_models/candidate_exam_question';
import { AuthenticationService } from '../../../_services/authentication.service';
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
        }
      });
    }

  ngOnInit(): void {
    this.getQuestions();
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

  saveFinish(){
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
