import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { first } from 'rxjs/operators';
import { ExamQuestion } from '../../../_models/exam_question';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  exam_question: ExamQuestion = new ExamQuestion();
  private loading = false;
  private submitted = false;
  isCreate = false;
  total_question = 4;
  questionForm: FormGroup;

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

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService
  ) {
      this.route.paramMap.subscribe(params => {
        if(params.get('exam_config_id'))
          this.exam_question.exam_config_id = Number(params.get('exam_config_id'));
        if(params.get('id')){
          this.exam_question.id = Number(params.get('id'));  
          if(this.exam_question.id == 0){
            this.isCreate = true;
            this.exam_question.question_type = 1;
          }else{
            this.examConfigService.get_exam_question(this.exam_question.id)
            .pipe()
            .subscribe(
                (data: ExamQuestion) => {
                  this.exam_question =  data;  
                  this.updateTotalQuestion();
                  console.log(this.exam_question);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
          }
        }else{
          
        }       
      });
  }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question: ['', Validators.required],
      choice1: ['', Validators.required],
      choice2: ['', Validators.required],
      choice3: ['', Validators.required],
      choice4: ['', Validators.required],
      choice5: ['', Validators.required],
    });
  }

  onSubmitCreate() {
    this.preProcess()
    this.submitted = true;
    this.loading = true;
    this.exam_question.id = 0;
    this.exam_question.exam_owner_id = 0;
    this.examConfigService.add_exam_question(this.exam_question)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success("Success fully Created", true);
            this.router.navigate(['/theme/questionlist', this.exam_question.exam_config_id]);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  onSubmitEdit() {
    this.preProcess()
    this.submitted = true;
    this.loading = true;
    this.exam_question.exam_owner_id = 0;
    this.examConfigService.edit_exam_question(this.exam_question)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success("Success fully Updated", true);
            this.router.navigate(['/theme/questionlist', this.exam_question.exam_config_id]);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
  preProcess(){
    if(this.exam_question.question_type == 3){
      this.exam_question.choice1 = "";
      this.exam_question.choice2 = "";
      this.exam_question.choice3 = "";
      this.exam_question.choice4 = "";
      this.exam_question.choice5 = "";
      this.exam_question.negative_marks = 0;
    }else{
      if(this.total_question == 4){
        this.exam_question.choice5 = "";
      }else if(this.total_question == 3){
        this.exam_question.choice4 = "";
        this.exam_question.choice5 = "";
      }else if(this.total_question == 2){
        this.exam_question.choice3 = "";
        this.exam_question.choice4 = "";
        this.exam_question.choice5 = "";
      }else if(this.total_question == 1){
        this.exam_question.choice2 = "";
        this.exam_question.choice3 = "";
        this.exam_question.choice4 = "";
        this.exam_question.choice5 = "";
      }
    }
  }
  updateTotalQuestion() {
    if(this.exam_question.question_type != 3){
      if(this.exam_question.choice5){
        this.total_question = 5;
      }else if(this.exam_question.choice4){
        this.total_question = 4;
      }else if(this.exam_question.choice3){
        this.total_question = 3;
      }else if(this.exam_question.choice2){
        this.total_question = 2;
      }else if(this.exam_question.choice1){
        this.total_question = 1;
      }
    }
  }
}