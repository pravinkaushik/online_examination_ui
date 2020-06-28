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

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  loading = false;
  candidates: Candidate[];
  exam_config: ExamConfig = new ExamConfig();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private examConfigService: ExamConfigService,
    public translate: TranslateService,
    private alertService: AlertService
  ) {
      this.route.paramMap.subscribe(params => {
        if(params.get('id'))
          this.exam_config.id = Number(params.get('id'));
      });
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
  ngOnInit() {
    this.candidates = []
    this.loading = true;
    this.examConfigService.get_candidate_list(this.exam_config.id)
    .pipe(first())
    .subscribe(
        data => {      
          this.candidates = data;  
          this.loading = false;
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  resendPassword(candidate_id){
    this.loading = true;
    this.examConfigService.resend_password(candidate_id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("SUC0014");
                this.loading = false;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
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
      this.loading = true;
      if(dialogResult){
        this.examConfigService.delete_candidate(candidate_id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("SUC0010");
                this.loading = false;
                this.candidates = this.candidates.filter(item => item.id !== candidate_id);
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
