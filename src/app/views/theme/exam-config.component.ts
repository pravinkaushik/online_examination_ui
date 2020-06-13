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


@Component({
  selector: 'app-exam-config',
  templateUrl: './exam-config.component.html'
})
export class ExamConfigComponent implements OnInit {
  private timezones = []; 
  private isCreate = false;
  examConfigForm: FormGroup;
  private exam_config: ExamConfig;
  loading = false;
  submitted = false;
  private start_time;
  private end_time;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private examConfigService: ExamConfigService,
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
    console.log(moment.tz.names());


    if(this.exam_config.id == 0){
      this.isCreate = true
      this.exam_config.random_question =1;
      this.exam_config.question_per_page =2;
    }else{
      this.examConfigService.get_exam_config(this.exam_config.id)
      .pipe()
      .subscribe(
          (data: ExamConfig) => {
            this.exam_config =  data;
            this.start_time = new FormControl(new Date(this.exam_config.start_time * 1000));
            this.end_time = new FormControl(new Date(this.exam_config.end_time * 1000));
            
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
    }

  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.exam_config.id = 0;
    this.exam_config.exam_owner_id = 0;
    this.exam_config.start_time = this.convertToTimestamp(this.start_time.value);
    this.exam_config.end_time = this.convertToTimestamp(this.end_time.value);
    
    this.examConfigService.create_exam_config(this.exam_config)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success("successfully created ", true);
            this.loading = false;
            this.router.navigate(['dashboard']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  onUpdate() {
    this.submitted = true;
    this.loading = true;
    this.exam_config.exam_owner_id = 0;
    this.exam_config.start_time = this.convertToTimestamp(this.start_time.value);
    this.exam_config.end_time = this.convertToTimestamp(this.end_time.value);
    
    this.examConfigService.edit_exam_config(this.exam_config)
    .pipe(first())
    .subscribe(
        data => {
            this.alertService.success("successfully updated ", true);
            this.router.navigate(['dashboard']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  convertToTimestamp(date){
    var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), 0);
    var utc_ts = (new Date(now_utc)).getTime() / 1000
    return utc_ts;
  }
}
