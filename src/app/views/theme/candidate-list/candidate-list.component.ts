import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../../_services/alert.service';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { first } from 'rxjs/operators';
import { Candidate } from '../../../_models/candidate';
import { ExamConfig } from '../../../_models/exam_config';

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
  ngOnInit() {
    this.candidates = []
    this.loading = true;
    this.examConfigService.get_candidate_list(this.exam_config.id)
    .pipe(first())
    .subscribe(
        data => {      
          this.candidates = data;  
          console.log(this.candidates);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  addCandidate(exam_config_id){
    this.router.navigate(['/theme/candidate', exam_config_id]);
  }
  deleteCandidate(exam_config_id){
    this.router.navigate(['/theme/candidate', exam_config_id]);
  }
}
