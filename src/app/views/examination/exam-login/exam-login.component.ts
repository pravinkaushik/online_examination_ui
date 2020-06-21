import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_services/alert.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { DefaultLayoutComponent } from '../../../containers/default-layout/default-layout.component';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-exam-login',
  templateUrl: './exam-login.component.html',
  styleUrls: ['./exam-login.component.css']
})
export class ExamLoginComponent implements OnInit {

  loginFormCandidate: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private defaultLayoutComponent: DefaultLayoutComponent
  ) {
    defaultLayoutComponent.isLoggedInCandidate =true;
  }

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/login_exam']);
    }
      this.loginFormCandidate = this.formBuilder.group({
        c_exam_config_id: ['', Validators.required],
        c_email: ['', CustomValidators.email],
        c_password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'start_exam';
  }
// convenience getter for easy access to form fields
get f() { return this.loginFormCandidate.controls; }

onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginFormCandidate.invalid) {
      this.alertService.error("ERR0008");
      return;
    }

    this.loading = true;
    debugger
    this.authenticationService.login_exam(this.f.c_exam_config_id.value, this.f.c_email.value, this.f.c_password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate([this.returnUrl,this.f.c_exam_config_id.value]);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
  }

}
