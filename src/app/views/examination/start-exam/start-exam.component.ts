import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_services/alert.service';
import { ExamProcessService } from '../../../_services/exam-process.service'
import { ExamConfig } from '../../../_models/exam_config';
import { timer, Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {

  exam_config: ExamConfig;
  submitted = false;

  countDown: Subscription;
  counter = 0;
  tick = 1000;
  
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private examProcessService: ExamProcessService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService
    ) { 
      this.exam_config = new ExamConfig();
      this.route.paramMap.subscribe(params => {
        if(params.get('id'))
          this.exam_config.id = Number(params.get('id'));
      });
    }

  ngOnInit(): void {
    this.spinner.show();
    this.examProcessService.candidate_exam_config(this.exam_config.id)
    .pipe()
    .subscribe(
        (data: ExamConfig) => {
          this.exam_config =  data;  
          this.spinner.hide();;
        },
        error => {
            this.alertService.error(error, false);
            this.spinner.hide();
        });

    this.examProcessService.get_remain_start_time(this.exam_config.id)
    .pipe()
    .subscribe(
        (data: number) => {
          this.counter =  data;  
          this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
        },
        error => {
            this.alertService.error(error, false);
        });
  }
  onSubmit() {
    this.countDown.unsubscribe();
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    this.spinner.show();
    this.examProcessService.prepare_candidate_exam(this.exam_config.id)
        .pipe(first())
        .subscribe(
            data => {
              this.spinner.hide();
                this.router.navigate(["landing_exam", this.exam_config.id]);
            },
            error => {
                this.alertService.error(error);
                this.spinner.hide();
            });
  }
}
