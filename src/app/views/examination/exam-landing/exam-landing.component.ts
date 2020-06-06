import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_services/alert.service';
import {ExamProcessService} from '../../../_services/exam-process.service'
import { ExamConfig } from '../../../_models/exam_config';
import { CandidateExamQuestion } from '../../../_models/candidate_exam_question';
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
  isNextDisabled = true;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
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

  saveNext(){
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
          this.isPreviousDisabled = this.page < 2;
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
}
