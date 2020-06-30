import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../../_services/alert.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { first } from 'rxjs/operators';
import { Candidate } from '../../../_models/candidate';
import { ExamConfig } from '../../../_models/exam_config';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../../_components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[];
  exam_config: ExamConfig = new ExamConfig();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private examConfigService: ExamConfigService,
    private spinner: NgxSpinnerService,
    public translate: TranslateService,
    private alertService: AlertService
  ) {
      this.route.paramMap.subscribe(params => {
        if(params.get('id'))
          this.exam_config.id = Number(params.get('id'));
      });
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
  ngOnInit() {
    this.candidates = []
    this.spinner.show();
    this.examConfigService.get_candidate_list(this.exam_config.id)
    .pipe(first())
    .subscribe(
        data => {      
          this.candidates = data;  
          this.spinner.hide();
        },
        error => {
            this.alertService.error(error);
            this.spinner.hide();
        });
  }

  resendPassword(candidate_id){
    this.spinner.show();
    this.examConfigService.resend_password(candidate_id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("SUC0014");
                this.spinner.hide();
            },
            error => {
                this.alertService.error(error);
                this.spinner.hide();
            });
  }

  addCandidate(id){
    this.router.navigate(['/theme/candidate', id]);
  }

  confirmDialog(candidate_id): void {
    const message = `confirm_delete`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.spinner.show();
      if(dialogResult){
        this.examConfigService.delete_candidate(candidate_id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("SUC0010");
                this.spinner.hide();
                this.candidates = this.candidates.filter(item => item.id !== candidate_id);
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
