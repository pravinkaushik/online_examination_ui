import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../_services/alert.service';
import { ExamConfigService } from '../../_services/exam-config.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { ExamConfig } from '../../_models/exam_config';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../_components/confirm-dialog/confirm-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  examConfigs: ExamConfig[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService,
    private spinner: NgxSpinnerService,
    public translate: TranslateService
  ) {

  }
  ngOnInit() {
    this.spinner.show();
    this.examConfigs = []
    this.examConfigService.get_exam_config_list()
    .pipe(first())
    .subscribe(
        data => {      
          this.examConfigs = data;  
          this.spinner.hide();
        },
        error => {
            this.alertService.error(error);
            this.spinner.hide();
        });
  }
  goToEditExamConfig(id) {
    this.router.navigate(['/theme/exam_config', id]);
  } 
  goToAddExamConfig() {
    this.router.navigate(['/theme/exam_config', 0]);
  }
  goToCandidates(id) {
    this.router.navigate(['/theme/candidatelist', id]);
  }

  goToQuestions(id) {
    this.router.navigate(['/theme/questionlist', id]);
  }

  confirmDialog(exam_config_id): void {
    const message = `confirm_delete`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.spinner.show();
      if(dialogResult){
        this.examConfigService.delete_exam_config(exam_config_id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("SUC0004");
                this.spinner.hide();
                this.examConfigs = this.examConfigs.filter(item => item.id !== exam_config_id);
                this.router.navigate(['dashboard']);
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
