import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AlertService } from '../../../_services/alert.service';
import { ExamConfig } from '../../../_models/exam_config';
import { first } from 'rxjs/operators';
import { Result } from '../../../_models/result';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  loading = false;
  results: Result[];
  exam_config_id: any;
  candidate_id: any;

  constructor(    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService) { 
      this.route.paramMap.subscribe(params => {
        if(params.get('exam_config_id'))
          this.exam_config_id = Number(params.get('exam_config_id'));
        if(params.get('candidate_id')){
          this.candidate_id = Number(params.get('candidate_id'));  
          }  
      });
    }

  ngOnInit(): void {
    this.examConfigService.get_exam_result(this.exam_config_id, this.candidate_id)
    .pipe()
    .subscribe(
        (data) => {
          this.results =  data;
          this.loading = false;
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  updateMarks(id, subjective_mark){
    this.examConfigService.update_exam_marks(id, subjective_mark, this.exam_config_id)
    .pipe()
    .subscribe(
        (data) => {
          this.results =  data;
          this.loading = false;
          alert(this.translate.instant('SUC0005'))
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
}
