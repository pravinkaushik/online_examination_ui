import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExamConfigService } from '../../../_services/exam-config.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { first } from 'rxjs/operators';
import { Candidate } from '../../../_models/candidate';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidate: Candidate = new Candidate();
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslateService,
    private examConfigService: ExamConfigService,
    private alertService: AlertService
  ) {
      this.route.paramMap.subscribe(params => {
        if(params.get('id'))
          this.candidate.exam_config_id = Number(params.get('id'));
      });
  }

  ngOnInit(): void {

  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.candidate.id = 0;
    this.candidate.exam_owner_id = 0;
    this.candidate.password_hash = "test";
    this.examConfigService.add_candidate(this.candidate)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/theme/candidatelist', this.candidate.exam_config_id]);
            this.loading = false;
            this.alertService.success("SUC0009", true);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }
}
