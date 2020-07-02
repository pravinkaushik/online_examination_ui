import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import "moment-timezone";

import { first } from 'rxjs/operators';
import { ExamConfig } from '../../../_models/exam_config';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AlertService } from '../../../_services/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-result-dashboard',
  templateUrl: './result-dashboard.component.html',
  styleUrls: ['./result-dashboard.component.css']
})
export class ResultDashboardComponent implements OnInit {

  examConfigs: ExamConfig[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private spinner: NgxSpinnerService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService
  ) {

  }

  ngOnInit(): void {
    this.spinner.show();
    this.examConfigs = []
    this.examConfigService.get_exam_config_list()
    .pipe(first())
    .subscribe(
        data => {      
          this.examConfigs = data;
          this.examConfigs.forEach(entry => {
            var displayStartTime = (entry.start_time * 1000) 
            var displayEndTime = (entry.end_time * 1000)
            entry.start_time = displayStartTime;
            entry.end_time = displayEndTime;
          });
          this.spinner.hide();
        },
        error => {
            this.alertService.error(error);
            this.spinner.hide();
        });
  }
  goToExamResult(id) {
    this.router.navigate(['/theme/exam_results', id]);
  } 
}
