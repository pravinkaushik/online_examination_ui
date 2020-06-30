import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import "moment-timezone";
import { ExamConfig } from '../../_models/exam_config';
import { FormControl, FormGroup } from '@angular/forms';
import { ExamConfigService } from '../../_services/exam-config.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../_services/alert.service';
import { first } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-exam-config',
  templateUrl: './exam-config.component.html'
})
export class ExamConfigComponent implements OnInit {
  timezones = []; 
  isCreate = false;
  examConfigForm: FormGroup;
  exam_config: ExamConfig;
  submitted = false;
  start_time;
  end_time;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private examConfigService: ExamConfigService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService
  ) {
      this.end_time = new FormControl(new Date());
      this.start_time = new FormControl(new Date());
      this.exam_config = new ExamConfig();
      this.route.paramMap.subscribe(params => {
        if(params.get('id'))
          this.exam_config.id = Number(params.get('id'));
      });
  }

  ngOnInit(): void {
    
    this.timezones = moment.tz.names();
    this.spinner.show();
    if(this.exam_config.id == 0){
      this.isCreate = true
      this.exam_config.random_question =1;
      this.exam_config.question_per_page =2;
      this.spinner.hide();
    }else{
      this.examConfigService.get_exam_config(this.exam_config.id)
      .pipe()
      .subscribe(
          (data: ExamConfig) => {
            this.exam_config =  data;
            var dateNow = new Date();       
            this.start_time = new FormControl(new Date((this.exam_config.start_time * 1000)+ (dateNow.getTimezoneOffset() * 60000) ));
            this.end_time = new FormControl(new Date((this.exam_config.end_time * 1000)+ (dateNow.getTimezoneOffset() * 60000)));
            this.spinner.hide();
          },
          error => {
              this.alertService.error(error);
              this.spinner.hide();
          });
    }

  }
  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    this.exam_config.id = 0;
    this.exam_config.exam_owner_id = 0;
    this.exam_config.start_time = this.convertToTimestamp(this.start_time.value);
    this.exam_config.end_time = this.convertToTimestamp(this.end_time.value);
    debugger
    this.examConfigService.create_exam_config(this.exam_config)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success("SUC0002", true);
            this.spinner.hide();
            this.router.navigate(['dashboard']);
        },
        error => {
            this.alertService.error(error);
            this.spinner.hide();
        });
  }

  onUpdate() {
    this.submitted = true;
    this.spinner.show();
    this.exam_config.exam_owner_id = 0;
    this.exam_config.start_time = this.convertToTimestamp(this.start_time.value);
    this.exam_config.end_time = this.convertToTimestamp(this.end_time.value);
    debugger
    this.examConfigService.edit_exam_config(this.exam_config)
    .pipe(first())
    .subscribe(
        data => {
          this.spinner.hide();
            this.alertService.success("SUC0003", true);
            this.router.navigate(['dashboard']);
        },
        error => {
            this.alertService.error(error);
            this.spinner.hide();
        });
  }

convertToTimestamp(d){
  var localOffset = d.getTimezoneOffset() * 60000;
  var utcTime = d.getTime() - localOffset;
  var utc_ts = utcTime/1000
  return utc_ts;
}

}
