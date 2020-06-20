import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AlertService } from '../../../_services/alert.service';
import { ExamConfig } from '../../../_models/exam_config';
import { first } from 'rxjs/operators';
import { ExamResult } from '../../../_models/exam_result';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  exam_config: ExamConfig = new ExamConfig();
  loading = false;
  exam_results: ExamResult[];
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private examConfigService: ExamConfigService,
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

  ngOnInit(): void {
    this.exam_results = []
    this.loading = true;
    this.examConfigService.get_exam_result_list(this.exam_config.id)
    .pipe(first())
    .subscribe(
        data => {
          this.exam_results = data;  
          this.loading = false;
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
  publishResult(candidate_id){

  }
  reviewResult(candidate_id){
    this.router.navigate(['/theme/exam_result', this.exam_config.id, candidate_id]);
  }
}
