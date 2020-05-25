import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../_services/alert.service';
import { ExamConfigService } from '../../_services/exam-config.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { ExamConfig } from '../../_models/exam_config';
import { first } from 'rxjs/operators';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  loading = false;
  examConfigs: ExamConfig[];
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
  }
  ngOnInit() {
    debugger;
    this.loading = true;
    this.examConfigService.get_exam_config_list()
    .pipe(first())
    .subscribe(
        data => {      
          this.examConfigs = data;  
          console.log(this.examConfigs);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
}
