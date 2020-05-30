import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../../_services/alert.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { first } from 'rxjs/operators';
import { ExamQuestion } from '../../../_models/exam_question';
import { ExamConfig } from '../../../_models/exam_config';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {


  loading = false;
  exam_questions: ExamQuestion[];
  exam_config: ExamConfig = new ExamConfig();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService
  ) {
      // redirect to login if not logged in
      if (!this.authenticationService.currentUserValue) {
          this.router.navigate(['/login']);
      }
      this.route.paramMap.subscribe(params => {
        if(params.get('id')){
          this.exam_config.id = Number(params.get('id'));
          
          this.examConfigService.get_exam_config(this.exam_config.id)
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
  ngOnInit() {
    this.exam_questions = []
    this.loading = true;
    this.examConfigService.get_exam_question_list(this.exam_config.id)
    .pipe(first())
    .subscribe(
        data => {      
          this.exam_questions = data;  
          console.log(this.exam_questions);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  addExamQuestion(exam_config_id, exam_question_id){
    this.router.navigate(['/theme/question', exam_config_id, exam_question_id]);
  }

  editExamQuestion(exam_config_id, exam_question_id){
    this.router.navigate(['/theme/question', exam_config_id, exam_question_id]);
  }

  deleteExamQuestion(exam_config_id, exam_question_id){
    this.router.navigate(['/theme/question', exam_config_id, exam_question_id]);
  }
}
