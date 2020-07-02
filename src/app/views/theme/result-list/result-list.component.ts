import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AlertService } from '../../../_services/alert.service';
import { ExamConfig } from '../../../_models/exam_config';
import { first } from 'rxjs/operators';
import { ExamResult } from '../../../_models/exam_result';
import { TranslateService } from '@ngx-translate/core';
import { ExamResultHeader } from '../../../_models/exam_result_header';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  exam_config: ExamConfig = new ExamConfig();
  examResultHeader: ExamResultHeader  = new ExamResultHeader();
  exam_results: ExamResult[];
  options: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private spinner: NgxSpinnerService,
    private examConfigService: ExamConfigService,
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

  ngOnInit(): void {
    this.translate.get('candidate_id').subscribe((text:string) => {this.examResultHeader.candidate_id = text})
    this.translate.get('email').subscribe((text:string) => {this.examResultHeader.email = text})
    this.translate.get('name').subscribe((text:string) => {this.examResultHeader.c_name = text})
    this.translate.get('te_om').subscribe((text:string) => {this.examResultHeader.total_pos = text})
    this.translate.get('te_nm').subscribe((text:string) => {this.examResultHeader.total_neg = text})
    this.translate.get('te_sm').subscribe((text:string) => {this.examResultHeader.total_sub = text})
    this.exam_results = []
    this.spinner.show();
    this.examConfigService.get_exam_result_list(this.exam_config.id)
    .pipe(first())
    .subscribe(
        data => {
          this.exam_results = data;
          this.exam_results.forEach(entry => {
            var displayStartTime = (entry.start_time * 1000)
            var displayEndTime = (entry.end_time * 1000)
            console.log(displayStartTime)
            console.log(displayEndTime)
            entry.start_time = displayStartTime;
            entry.end_time = displayEndTime;
          });
          this.options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: false,
            headers: [this.examResultHeader.candidate_id, this.examResultHeader.email, this.examResultHeader.c_name, this.examResultHeader.total_pos, this.examResultHeader.total_neg, this.examResultHeader.total_sub],
            showTitle: true,
            title: this.exam_config.exam_title,
            useBom: false,
            removeNewLines: true,
            keys: ['candidate_id','c_name','email', 'total_pos', 'total_neg','total_sub']
          };
          this.spinner.hide();
        },
        error => {
            this.alertService.error(error);
            this.spinner.hide();
        });
  }
  publishResult(candidate_id){

  }
  reviewResult(candidate_id){
    this.router.navigate(['/theme/exam_result', this.exam_config.id, candidate_id]);
  }
}
