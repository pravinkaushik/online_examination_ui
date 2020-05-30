import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { first } from 'rxjs/operators';
import { ExamQuestion } from '../../../_models/exam_question';

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

  constructor(
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
        if(params.get('exam_config_id'))
          this.exam_question.exam_config_id = Number(params.get('exam_config_id'));
        if(params.get('id')){
          this.exam_question.id = Number(params.get('id'));  
          if(this.exam_question.id == 0){
            this.isCreate = true;
          }else{
            this.examConfigService.get_exam_question(this.exam_question.id)
            .pipe()
            .subscribe(
                (data: ExamQuestion) => {
                  this.exam_question =  data;  
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

  }
  onSubmitCreate() {
    this.submitted = true;
    this.loading = true;
    this.exam_question.id = 0;
    this.exam_question.exam_owner_id = 0;
    debugger;
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
}