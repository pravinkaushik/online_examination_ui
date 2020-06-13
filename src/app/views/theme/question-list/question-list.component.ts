import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../../_services/alert.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { first } from 'rxjs/operators';
import { ExamQuestion } from '../../../_models/exam_question';
import { ExamConfig } from '../../../_models/exam_config';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../../_components/confirm-dialog/confirm-dialog.component';


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
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService
  ) {
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
          this.loading = false;
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


  confirmDialog(exam_question_id): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.loading = true;
      if(dialogResult){
        this.examConfigService.delete_exam_question(exam_question_id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("successfully Deleted.");
                this.loading = false;
                this.exam_questions = this.exam_questions.filter(item => item.id !== exam_question_id);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
      }else{
        this.loading = false;
      }
    });
  }
}
