import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../_services/authentication.service';
import { AlertService } from '../../_services/alert.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { CustomValidators } from 'ng2-validation';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  submitted = false;
  returnUrl: string;
  message = '';
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private authService: AuthService,
      private spinner: NgxSpinnerService,
      public translate: TranslateService
  ) {

  }

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/dashboard']);
    }
      this.loginForm = this.formBuilder.group({
          email: ['', CustomValidators.email],
          password: ['', Validators.required]
      });
      
      this.signUpForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        retype_password: ['', Validators.required]
    });
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get fs() { return this.signUpForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.spinner.show();
      this.authenticationService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                this.spinner.hide();
                this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error, true);
                  this.spinner.hide();
              });
  }

  onForgotPassword() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.spinner.show();
    this.authenticationService.forgot_password(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success(data.message);
              this.spinner.hide();
            },
            error => {
                this.alertService.error(error, true);
                this.spinner.hide();
            });
}

  onSignup() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
        return;
    }
    
    if(this.fs.password.value != this.fs.retype_password.value){
      this.alertService.error("ERR0001");
      return;
    }
    this.spinner.show();
    this.authenticationService.signup(this.fs.email.value, this.fs.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success(data.message);
              this.spinner.hide();
            },
            error => {
                this.alertService.error(error);
                this.spinner.hide();
            });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
      this.spinner.show();
      this.authenticationService.signupSocialMedia(x.authToken, "GOOGLE")
        .pipe(first())
        .subscribe(
            data => {
              this.spinner.hide();
              this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.spinner.hide();
            });
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => {
      this.spinner.show();
      this.authenticationService.signupSocialMedia(x.authToken, "FB")
        .pipe(first())
        .subscribe(
            data => {
              this.spinner.hide();
              this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.spinner.hide();
            });
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

}
