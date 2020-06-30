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
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  exam_questions: ExamQuestion[];
  exam_config: ExamConfig = new ExamConfig();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public translate: TranslateService,
    private examConfigService: ExamConfigService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService
  ) {
      this.route.paramMap.subscribe(params => {
        if(params.get('id')){
          this.exam_config.id = Number(params.get('id'));
          this.spinner.show();
          this.examConfigService.get_exam_config(this.exam_config.id)
          .pipe()
          .subscribe(
                  (data: ExamConfig) => {
                    this.exam_config =  data;  
                    this.spinner.hide();
                  },
                  error => {
                      this.alertService.error(error);
                      this.spinner.hide();
            });
        }
      });

  }
  ngOnInit() {
    this.exam_questions = []
    this.spinner.show();
    this.examConfigService.get_exam_question_list(this.exam_config.id)
    .pipe(first())
    .subscribe(
        data => {      
          this.exam_questions = data;  
          this.spinner.hide();
        },
        error => {
            this.alertService.error(error);
            this.spinner.hide();
        });
  }

  addExamQuestion(exam_config_id, exam_question_id){
    this.router.navigate(['/theme/question', exam_config_id, exam_question_id]);
  }

  editExamQuestion(exam_config_id, exam_question_id){
    this.router.navigate(['/theme/question', exam_config_id, exam_question_id]);
  }


  confirmDialog(exam_question_id): void {
    const message = `confirm_delete`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.spinner.show();
      if(dialogResult){
        this.examConfigService.delete_exam_question(exam_question_id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("SUC0006");
                this.spinner.hide();
                this.exam_questions = this.exam_questions.filter(item => item.id !== exam_question_id);
            },
            error => {
                this.alertService.error(error);
                this.spinner.hide();
            });
      }else{
        this.spinner.hide();
      }
    });
  }
}
