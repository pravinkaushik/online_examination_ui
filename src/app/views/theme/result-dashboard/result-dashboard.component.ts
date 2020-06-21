import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { first } from 'rxjs/operators';
import { ExamConfig } from '../../../_models/exam_config';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AlertService } from '../../../_services/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-result-dashboard',
  templateUrl: './result-dashboard.component.html',
  styleUrls: ['./result-dashboard.component.css']
})
export class ResultDashboardComponent implements OnInit {

  loading = false;
  examConfigs: ExamConfig[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService
  ) {

  }

  ngOnInit(): void {
    this.examConfigs = []
    this.examConfigService.get_exam_config_list()
    .pipe(first())
    .subscribe(
        data => {      
          this.examConfigs = data;  
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
  goToExamResult(id) {
    this.router.navigate(['/theme/exam_results', id]);
  } 
}
