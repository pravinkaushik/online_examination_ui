(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div [ngClass]=\"message.cssClass\"><strong>{{title | translate}}&nbsp;</strong>{{message.text | translate}}</div>\n          </div>\n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/confirm-dialog/confirm-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/confirm-dialog/confirm-dialog.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\n    {{title}}\n  </h1>\n  \n  <div mat-dialog-content>\n    <p>{{message | translate}}</p>\n  </div>\n  \n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onDismiss()\">{{'no' | translate}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">{{'yes' | translate}}</button>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [navbarBrandRouterLink]=\"['/dashboard']\"\n  [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/img/brand/sygnet.png', width: 30, height: 25, alt: 'Easy Online Exam'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.png', width: 30, height: 30, alt: 'Easy Online Exam'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"'lg'\">\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li *ngIf=\"!isLoggedInExamOwner && !isLoggedInCandidate\" class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"/#/\">{{'home' | translate}}</a>\n    </li>\n    <li *ngIf=\"isLoggedInExamOwner\"  class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"/#/dashboard\">{{'dashboard' | translate}}</a>\n    </li>\n    <li *ngIf=\"!isLoggedInExamOwner && !isLoggedInCandidate\" class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"/#/login\">{{'login_signup' | translate}}</a>\n    </li>\n    <li *ngIf=\"!isLoggedInCandidate\" class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"/#/contact_us\">{{'contact' | translate}}</a>\n    </li>\n  </ul>\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"fa fa-language\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n       Language\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>{{'select_language' | translate}}</strong></div>\n        <a class=\"dropdown-item\" (click)=\"switchLang('ar')\"><i class=\"fa fa-globe\"></i>Arabic</a> \n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"switchLang('zh')\"><i class=\"fa fa-globe\"></i>Chinese</a>    \n        <div class=\"divider\"></div>\t\n        <a class=\"dropdown-item\" (click)=\"switchLang('nl')\"><i class=\"fa fa-globe\"></i>Dutch</a>  \n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"switchLang('en')\"><i class=\"fa fa-globe\"></i>English</a>     \n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"switchLang('fr')\"><i class=\"fa fa-globe\"></i>French</a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"switchLang('hl')\"><i class=\"fa fa-globe\"></i>Hindi</a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"switchLang('ru')\"><i class=\"fa fa-globe\"></i>Russian</a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"switchLang('es')\"><i class=\"fa fa-globe\"></i>Spanish</a>\n      </div>\n    </li>\n    <li *ngIf=\"isLoggedInExamOwner\" class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"fa fa-user-circle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>{{'settings' | translate}}</strong></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i>{{'profile' | translate}}</a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"logout()\" href=\"#\"><i class=\"fa fa-sign-out\"></i>{{'logout' | translate}}</a>\n      </div>\n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar *ngIf=\"isLoggedInExamOwner\" #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n      <alert></alert>\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n  <app-aside [fixed]=\"true\" [display]=\"false\" [ngClass]=\"'test'\">\n    <tabset>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\n        \n        <div class=\"list-group list-group-accent\">\n      \n          <div *ngIf=\"!isLoggedInExamOwner && !isLoggedInCandidate\" class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\n            <a class=\"nav-link\" href=\"/#/\">{{'home' | translate}}</a>\n          </div>\n          <div *ngIf=\"isLoggedInExamOwner\" class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\n            <a class=\"nav-link\" href=\"/#/dashboard\">{{'dashboard' | translate}}</a>\n          </div>\n          <div *ngIf=\"!isLoggedInExamOwner && !isLoggedInCandidate\" class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\n            <a class=\"nav-link\" href=\"/#/login\">{{'login_signup' | translate}}</a>\n          </div>\n          <div *ngIf=\"!isLoggedInCandidate\" class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\n            <a class=\"nav-link\" href=\"/#/contact_us\">{{'contact' | translate}}</a>\n          </div>\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\"></div>\n        </div>\n      </tab>\n    </tabset>\n  </app-aside>\n</div>\n<app-footer>\n  <span><a href=\"https://www.easyonlineexam.com\">Easy Online Exam</a> &copy; 2020 easyonlineexam.com</span>\n  <span class=\"ml-auto\">{{'powered_by' | translate}}<a href=\"https://www.easyonlineexam.com\"> Easy Online Exam</a></span>\n</app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/activation/activation.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/activation/activation.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>activation works! redirecting page</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/exam-landing/exam-landing.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/exam-landing/exam-landing.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <button [disabled]=\"isPreviousDisabled\" type=\"button\" (click)=\"previous()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>{{'previous' | translate}}</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <button *ngIf=\"!isFinalPage\" type=\"button\" (click)=\"saveNext()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>{{'save_next' | translate}}</button>              \n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">               \n                <button *ngIf=\"isFinalPage\" type=\"button\" (click)=\"saveFinish()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-dot-circle-o\"></i>{{'save_finish' | translate}}</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                {{'remain_time' | translate}}: {{counter | formatTime}} \n              </div>\n            </div>\n          </div>\n    </div>\n    <div class=\"row\" *ngFor=\"let exam_question of candidateExamQuestionArr\" >\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n                <label class=\"col-md-3 col-form-label\">{{exam_question.id}}:<div [innerHTML]=\"exam_question.question\"></div> </label>\n            </div>\n            <div class=\"card-body\" *ngIf=\"exam_question.question_type == 3\" >\n              <label class=\"col-md-3 col-form-label\" for=\"answer\">{{'answer' | translate}}</label>\n              <div class=\"col-md-9\">               \n                <angular-editor [placeholder]=\"'Enter Question here...'\" [config]=\"editorConfig\" [(ngModel)]=\"exam_question.answer\"></angular-editor>                     \n              </div>\n            </div>\n            <div class=\"card-body\" *ngIf=\"exam_question.question_type != 3 && exam_question.choice1\" >\n                <div class=\"form-check\"><span class=\"help-block\">\n                    <input *ngIf=\"exam_question.question_type == 2\" class=\"form-check-input\" type=\"checkbox\" id=\"checkboxchoice1\" name=\"checkboxchoice1\" [(ngModel)]=\"exam_question.is_choice1_selected\" ng-true-value=\"1\" ng-false-value=\"0\">                   \n                    <input *ngIf=\"exam_question.question_type == 1\" type=\"radio\" name=\"redioboxchoice{{exam_question.id}}\" [(ngModel)]=\"exam_question.radio_button_selected\" [value]=\"1\">\n                    <label class=\"form-check-label\" for=\"checkboxchoice1\"><div [innerHTML]=\"exam_question.choice1\"></div></label>                  \n                </span></div>\n            </div>\n            <div class=\"card-body\" *ngIf=\"exam_question.question_type != 3 && exam_question.choice2\" >\n                <div class=\"form-check\"><span class=\"help-block\">\n                    <input *ngIf=\"exam_question.question_type == 2\" class=\"form-check-input\" type=\"checkbox\" id=\"checkboxchoice2\" name=\"checkboxchoice2\" [(ngModel)]=\"exam_question.is_choice2_selected\" ng-true-value=\"1\" ng-false-value=\"0\">\n                    <input *ngIf=\"exam_question.question_type == 1\" type=\"radio\" name=\"redioboxchoice{{exam_question.id}}\" [(ngModel)]=\"exam_question.radio_button_selected\" [value]=\"2\">\n                    <label class=\"form-check-label\" for=\"checkboxchoice2\"><div [innerHTML]=\"exam_question.choice2\"></div></label>                   \n                </span></div>\n            </div>\n            <div class=\"card-body\" *ngIf=\"exam_question.question_type != 3 && exam_question.choice3\" >\n                <div class=\"form-check\"><span class=\"help-block\">\n                    <input *ngIf=\"exam_question.question_type == 2\" class=\"form-check-input\" type=\"checkbox\" id=\"checkboxchoice3\" name=\"checkboxchoice3\" [(ngModel)]=\"exam_question.is_choice3_selected\" ng-true-value=\"1\" ng-false-value=\"0\">\n                    <input *ngIf=\"exam_question.question_type == 1\" type=\"radio\" name=\"redioboxchoice{{exam_question.id}}\" [(ngModel)]=\"exam_question.radio_button_selected\" [value]=\"3\">\n                    <label class=\"form-check-label\" for=\"checkboxchoice3\"><div [innerHTML]=\"exam_question.choice3\"></div></label>\n                </span></div>\n            </div>\n            <div class=\"card-body\" *ngIf=\"exam_question.question_type != 3 && exam_question.choice4\" >\n                <div class=\"form-check\"><span class=\"help-block\">\n                    <input *ngIf=\"exam_question.question_type == 2\" class=\"form-check-input\" type=\"checkbox\" id=\"checkboxchoice4\" name=\"checkboxchoice4\" [(ngModel)]=\"exam_question.is_choice4_selected\" ng-true-value=\"1\" ng-false-value=\"0\">\n                    <input *ngIf=\"exam_question.question_type == 1\" type=\"radio\" name=\"redioboxchoice{{exam_question.id}}\" [(ngModel)]=\"exam_question.radio_button_selected\" [value]=\"4\">\n                    <label class=\"form-check-label\" for=\"checkboxchoice4\"><div [innerHTML]=\"exam_question.choice4\"></div></label>\n                </span></div>\n            </div>\n            <div class=\"card-body\" *ngIf=\"exam_question.question_type != 3 && exam_question.choice5\" >\n                <div class=\"form-check\"><span class=\"help-block\">\n                    <input *ngIf=\"exam_question.question_type == 2\" class=\"form-check-input\" type=\"checkbox\" id=\"checkboxchoice5\" name=\"checkboxchoice5\" [(ngModel)]=\"exam_question.is_choice5_selected\" ng-true-value=\"1\" ng-false-value=\"0\">\n                    <input *ngIf=\"exam_question.question_type == 1\" type=\"radio\" name=\"redioboxchoice{{exam_question.id}}\" [(ngModel)]=\"exam_question.radio_button_selected\" [value]=\"5\"> \n                    <label class=\"form-check-label\" for=\"checkboxchoice5\"><div [innerHTML]=\"exam_question.choice5\"></div></label>\n                </span></div>\n            </div>\n\n          </div>\n        </div><!--/.col-->\n      \n      </div><!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <button [disabled]=\"isPreviousDisabled\" type=\"button\" (click)=\"previous()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>{{'previous' | translate}}</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <button *ngIf=\"!isFinalPage\" type=\"button\" (click)=\"saveNext()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>{{'save_next' | translate}}</button>\n                <button *ngIf=\"isFinalPage\" type=\"button\" (click)=\"save()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>{{'save' | translate}}</button>\n              </div>\n            </div>    \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <button *ngIf=\"isFinalPage\" type=\"button\" (click)=\"saveFinish()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-dot-circle-o\"></i>{{'save_finish' | translate}}</button>\n              </div>\n            </div>    \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                {{'remain_time' | translate}}: {{counter | formatTime}} \n              </div>\n            </div>\n          </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/exam-login/exam-login.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/exam-login/exam-login.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <div class=\"card-header\">\n              <h1>{{'test_login_header' | translate}}</h1>\n            </div>\n              <p class=\"text-muted\">{{'test_login_subheader' | translate}}</p>\n              <form [formGroup]=\"loginFormCandidate\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"card-body\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <input type=\"text\" formControlName=\"c_exam_config_id\" class=\"form-control\" placeholder=\"{{'test_id' | translate}}\" autocomplete=\"Test ID\" required>\n                  <div *ngIf=\"f.c_exam_config_id.invalid && (f.c_exam_config_id.dirty || f.c_exam_config_id.touched)\" class=\"text-danger\">\n                    <div *ngIf=\"f.c_exam_config_id.errors.required\">{{'required' | translate}}</div>\n                  </div>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"email\" formControlName=\"c_email\" class=\"form-control\" placeholder=\"{{'email' | translate}}\" autocomplete=\"email\" required minlength=\"4\">\n                  <div *ngIf=\"f.c_email.invalid && (f.c_email.dirty || f.c_email.touched)\" class=\"text-danger\">\n                    <div *ngIf=\"f.c_email.errors.required\">{{'required' | translate}}</div>\n                    <div *ngIf=\"f.c_email.errors?.email\">{{'val_email' | translate}}</div> \n                  </div>\n                </div>\n                <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" formControlName=\"c_password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" required>\n                  <div *ngIf=\"f.c_password.invalid && (f.c_password.dirty || f.c_password.touched)\" class=\"text-danger\">\n                    <div *ngIf=\"f.c_password.errors.required\">{{'required' | translate}}</div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <button [disabled]=\"loading || this.loginFormCandidate.invalid\" class=\"btn btn-primary px-4\">\n                      <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                      {{'login' | translate}}\n                    </button>\n                  </div>\n                </div>\n                </div>\n              </form>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/finish-exam/finish-exam.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/finish-exam/finish-exam.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'site_name' | translate}}\n          </div>\n          <div class=\"card-body\">\n            {{'SUC0011' | translate}}\n          </div>\n        </div>\n      </div><!--/.col-->    \n    </div><!--/.row-->\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/start-exam/start-exam.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/start-exam/start-exam.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'site_name' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">{{'term_condition' | translate}}</label>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">{{'test_name' | translate}} : </label>\n              <div class=\"col-md-9\"> {{exam_config.exam_name}}\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">{{'test_title' | translate}} : </label>\n              <div class=\"col-md-9\"> {{exam_config.exam_title}}\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">{{'duration_minute' | translate}} : </label>\n              <div class=\"col-md-9\"> {{exam_config.duration_minute}}\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">{{'total_question' | translate}} : </label>\n              <div class=\"col-md-9\"> {{exam_config.total_question}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'TermsConditions' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <button [disabled]=\"loading || counter > 0\" (click)=\"onSubmit()\" class=\"btn btn-primary px-4\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                {{'start_now' | translate}}\n            </button>\n            <strong *ngIf=\"counter > 0\" >{{'start_in' | translate}}: {{counter | formatTime}} </strong> \n          </div>\n        </div>\n      </div><!--/.col-->\n    \n    </div><!--/.row-->\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Online Examination System\n          </div>\n          <div class=\"card-body\">\n            About us\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch default\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-primary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-secondary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-success\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-warning\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-info\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-danger\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch default - pills\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-pill switch-primary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-secondary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-success\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-warning\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-info\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-danger\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n  \n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch outline\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-outline-primary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-secondary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-success\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-warning\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-info\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-danger\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch outline - pills\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-pill switch-outline-primary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-secondary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-success\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-warning\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-info\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-danger\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch outline alternative\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-outline-primary-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-secondary-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-success-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-warning-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-info-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-outline-danger-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch outline alternative - pills\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-pill switch-outline-primary-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-secondary-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-success-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-warning-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-info-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-pill switch-outline-danger-alt\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch with text\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-label switch-primary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-secondary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-success\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-warning\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-info\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-danger\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Switch with text - pills\n          </div>\n          <div class=\"card-body\">\n            <label class=\"switch switch-label switch-pill switch-primary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-pill switch-secondary\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-pill switch-success\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-pill switch-warning\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-pill switch-info\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n            &nbsp;&nbsp;&nbsp;\n            <label class=\"switch switch-label switch-pill switch-danger\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n          </div>\n        </div>\n      </div><!--/.col-->\n  \n    </div><!--/.row-->\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'contact' | translate}} - {{'site_name' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <form class=\"form-horizontal\" #myForm=\"ngForm\">\n              <div class=\"card-body\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"name\">{{'name' | translate}}</label>\n                  <div class=\"col-md-9\">\n                    <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" placeholder=\"{{'provide_name' | translate}}\" [(ngModel)]=\"enquiry.name\" required minlength=\"2\" #name=\"ngModel\">\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"text-danger\">\n                      <div *ngIf=\"name.errors.required\">{{'required' | translate}}</div>\n                      <div *ngIf=\"name.errors.minlength\">{{'val_2_char' | translate}}</div>\n                    </div>\n                    <span class=\"help-block\">{{'provide_name' | translate}}</span>    \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\" for=\"email\">{{'email' | translate}}</label>\n                  <div class=\"col-md-9\">\n                    <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"{{'email' | translate}}\" [(ngModel)]=\"enquiry.email\"  #email=\"ngModel\" email required>\n                    <span class=\"help-block\">{{'email' | translate}}</span>\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text-danger\">\n                      <div *ngIf=\"email.errors.required\">{{'required' | translate}}.</div>\n                      <div *ngIf=\"email.errors.email\">{{'val_email' | translate}}</div>\n                    </div>\n                  </div>\n                </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-3 col-form-label\" for=\"message\">{{'message' | translate}}</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"text\" id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"{{'query_message' | translate}}\" [(ngModel)]=\"enquiry.message\" required minlength=\"2\" #message=\"ngModel\">\n                      <div *ngIf=\"message.invalid && (message.dirty || message.touched)\" class=\"text-danger\">\n                        <div *ngIf=\"message.errors.required\">{{'required' | translate}}</div>\n                        <div *ngIf=\"message.errors.minlength\">{{'val_2_char' | translate}}</div>\n                      </div>\n                      <span class=\"help-block\">{{'query_message' | translate}}</span>\n                    </div>\n                  </div>\n\n              </div>\n              <div class=\"card-footer\">\n                <button [disabled]=\"myForm.invalid\" type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>{{'submit' | translate}}</button>\n                <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i>{{'reset' | translate}}</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div><!--/.col-->\n\n    </div><!--/.row-->\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'welcome_header' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <strong>\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\">{{'welcome_header_detail1' | translate}}</li>\n                <li class=\"list-group-item\">{{'welcome_header_detail2' | translate}}</li>\n              </ul>\n            </strong>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">                       \n            <strong>{{'donate_header' | translate}}</strong>\n          </div>\n          <div class=\"card-body\">\n            {{'donate_detail1' | translate}}\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'key_features' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">{{'key1' | translate}}</li>\n              <li class=\"list-group-item\">{{'key2' | translate}}</li>\n              <li class=\"list-group-item\">{{'key3' | translate}}</li>\n              <li class=\"list-group-item\">{{'key4' | translate}}</li>  \n              <li class=\"list-group-item\">{{'key5' | translate}}</li>      \n              <li class=\"list-group-item\">{{'key6' | translate}}</li>\n              <li class=\"list-group-item\">{{'key7' | translate}}</li>             \n              <li class=\"list-group-item\">{{'key8' | translate}}</li>\n            </ul>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'easy_use' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" [src]=\"url\"  allowfullscreen></iframe>\n          </div>\n          </div>\n        </div>\n      </div><!--/.col-->\n  \n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'how_use' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">{{'how_use_step1' | translate}}</li>\n              <li class=\"list-group-item\">{{'how_use_step2' | translate}}</li>\n              <li class=\"list-group-item\">{{'how_use_step3' | translate}}</li>\n              <li class=\"list-group-item\">{{'how_use_step4' | translate}}</li>\n              <li class=\"list-group-item\">{{'how_use_step5' | translate}}</li>  \n              <li class=\"list-group-item\">{{'how_use_step6' | translate}}</li>      \n            </ul>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            {{'free_api' | translate}}\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">{{'api_detail1' | translate}}</li>\n              <li class=\"list-group-item\">{{'api_detail2' | translate}}</li>\n              <li class=\"list-group-item\">{{'api_detail3' | translate}}</li>\n              <li class=\"list-group-item\">{{'api_detail4' | translate}}</li>\n              <li class=\"list-group-item\">{{'api_detail5' | translate}}</li>    \n            </ul>\n          </div>\n        </div>\n      </div><!--/.col-->\n    </div><!--/.row-->\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-header\">\n                <h1>{{'login' | translate}}</h1>\n              </div>\n                <p class=\"text-muted\">{{'login_subheader' | translate}}</p>\n                <form [formGroup]=\"loginForm\" >\n                  <div class=\"card-body\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"{{'email' | translate}}\" autocomplete=\"username\" required>\n                    <div *ngIf=\"f.email.invalid && (f.email.dirty || f.email.touched)\" class=\"text-danger\">\n                      <div *ngIf=\"f.email.errors.required\">{{'required' | translate}}</div>\n                      <div *ngIf=\"f.email.errors?.email\">{{'val_email' | translate}}</div>  \n                    </div>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"{{'password' | translate}}\" autocomplete=\"current-password\" required>\n                    <div *ngIf=\"f.password.invalid && (f.password.dirty || f.password.touched)\" class=\"text-danger\">\n                      <div *ngIf=\"f.password.errors.required\">{{'required' | translate}}</div>\n                    </div>\n                  </div>\n                  <div class=\"card-footer\">\n                  <div class=\"row\">\n                    <div class=\"col-6 text-center\">\n                      <button [disabled]=\"loading || this.loginForm.invalid\" class=\"btn btn-primary px-4\" (click)=\"onSubmit()\">\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        {{'login' | translate}}\n                      </button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button [disabled]=\"loading || this.loginForm.invalid\" class=\"btn btn-primary px-4\" (click)=\"onForgotPassword()\">\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        {{'forgot' | translate}}\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                </div>\n                </form>\n                <div class=\"card-footer\">\n                  <div class=\"row\">\n                    <div class=\"card-body text-center\">\n                        <button (click)=\"signInWithFB()\" type=\"button\" class=\"btn btn-brand btn-sm btn-facebook mr-1\" style=\"margin-bottom: 4px\">\n                          <i class=\"fa fa-facebook\"></i>\n                          <span>{{'facebook' | translate}}</span>\n                        </button>\n                        <button (click)=\"signInWithGoogle()\" type=\"button\" class=\"btn btn-brand btn-sm btn-google-plus mr-1\" style=\"margin-bottom: 4px\">\n                          <i class=\"fa fa-google-plus\"></i>\n                          <span>{{'google' | translate}}</span>\n                        </button>\n                    </div>\n                  </div> \n              </div>\n            </div>\n            <div class=\"card p-4\">\n              <div class=\"card-header\">\n                <h1>{{'register' | translate}}</h1>\n              </div>\n                <p class=\"text-muted\">{{'register_subheader' | translate}}</p>\n                <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSignup()\">\n                  <div class=\"card-body\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"{{'email' | translate}}\" autocomplete=\"username\" required>\n                    <div *ngIf=\"fs.email.invalid && (fs.email.dirty || fs.email.touched)\" class=\"text-danger\">\n                      <div *ngIf=\"fs.email.errors.required\">{{'required' | translate}}</div>\n                    </div>\n                  </div>\n                  \n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"{{'password' | translate}}\" autocomplete=\"new-password\" required>\n                    <div *ngIf=\"fs.password.invalid && (fs.password.dirty || fs.password.touched)\" class=\"text-danger\">\n                      <div *ngIf=\"fs.password.errors.required\">{{'required' | translate}}</div>\n                    </div>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" formControlName=\"retype_password\" class=\"form-control\" placeholder=\"{{'re_password' | translate}}\" autocomplete=\"new-password\" required>\n                    <div *ngIf=\"fs.retype_password.invalid && (fs.retype_password.dirty || fs.retype_password.touched)\" class=\"text-danger\">\n                      <div *ngIf=\"fs.retype_password.errors.required\">{{'required' | translate}}</div>\n                    </div>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                    <button [disabled]=\"loading || this.signUpForm.invalid\" (click)=\"onSignup()\" type=\"button\" class=\"btn btn-primary px-4\">{{'create_account' | translate}}</button>\n                  </div>\n                  <div class=\"card-footer\"></div>\n                </div>\n                </form>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <form>\n                <h1>Register</h1>\n                <p class=\"text-muted\">Create your account</p>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\n                </div>\n                <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\n                </div>\n                <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n              </form>\n            </div>\n            <div class=\"card-footer p-4\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n                </div>\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService, translate) {
        this.alertService = alertService;
        this.translate = translate;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getAlert()
            .subscribe(function (message) {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    _this.title = "success";
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    _this.title = "danger";
                    break;
            }
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/alert.component.html")).default }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/confirm-dialog/confirm-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/_components/confirm-dialog/confirm-dialog.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/_components/confirm-dialog/confirm-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/_components/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmDialogComponent, ConfirmDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function() { return ConfirmDialogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onConfirm = function () {
        // Close the dialog, return true
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.prototype.onDismiss = function () {
        // Close the dialog, return false
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: ConfirmDialogModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-confirm-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/confirm-dialog/confirm-dialog.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/_components/confirm-dialog/confirm-dialog.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            ConfirmDialogModel])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
var ConfirmDialogModel = /** @class */ (function () {
    function ConfirmDialogModel(title, message) {
        this.title = title;
        this.message = message;
    }
    return ConfirmDialogModel;
}());



/***/ }),

/***/ "./src/app/_components/custom-material/custom-material.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/_components/custom-material/custom-material.module.ts ***!
  \***********************************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");




var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        if (state.url === '/landing_exam' || state.url.includes('/start_exam')) {
            this.router.navigate(['/login_exam'], { queryParams: { returnUrl: state.url } });
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                //location.reload(true);
                if (_this.router.url == '/login_exam') {
                    _this.router.navigate(['/login_exam']);
                }
                else {
                    _this.router.navigate(['/login']);
                }
            }
            var error = err.error.error || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.access_token,
                    'Content-Type': 'application/json',
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/enquiry.ts":
/*!************************************!*\
  !*** ./src/app/_models/enquiry.ts ***!
  \************************************/
/*! exports provided: Enquiry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enquiry", function() { return Enquiry; });
var Enquiry = /** @class */ (function () {
    function Enquiry() {
    }
    return Enquiry;
}());



/***/ }),

/***/ "./src/app/_models/exam_config.ts":
/*!****************************************!*\
  !*** ./src/app/_models/exam_config.ts ***!
  \****************************************/
/*! exports provided: ExamConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamConfig", function() { return ExamConfig; });
var ExamConfig = /** @class */ (function () {
    function ExamConfig() {
    }
    return ExamConfig;
}());



/***/ }),

/***/ "./src/app/_nav.ts":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        variant: 'success',
        badge: {
            variant: 'info',
            text: ''
        }
    },
    {
        title: true,
        name: 'Configuration'
    },
    {
        name: 'Add Examination',
        variant: 'info',
        url: '/theme/exam_config/0',
        icon: 'cui-note'
    },
    {
        name: 'Bulk upload (comming soon)',
        url: 'bulk_upload',
        icon: 'icon-layers',
        variant: 'danger',
        attributes: { target: '_blank', rel: 'noopener' }
    },
    {
        name: 'Question bank (comming soon)',
        url: 'question_bank',
        icon: 'icon-cloud-download',
        //    class: 'mt-auto',
        variant: 'danger',
        attributes: { target: '_blank', rel: 'noopener' }
    },
    /*  {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
      },
      {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
      }, */
    {
        title: true,
        name: 'Components'
    },
    {
        divider: true
    },
    {
        name: 'Results',
        url: '/theme/result_dashboard',
        icon: 'icon-drop',
        variant: 'success'
    }
];


/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        // clear by calling subject.next() without parameters
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login_exam = function (exam_config_id, email, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/login_exam", { exam_config_id: exam_config_id, email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.activate = function (key) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/activate", { "key": key })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/login", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.forgot_password = function (email, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/forgot_password", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (ret) {
            return ret;
        }));
    };
    AuthenticationService.prototype.signup = function (email, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/signup", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.signupSocialMedia = function (auth_token, provider) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/signup_social_media", { auth_token: auth_token, provider: provider })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.validate_login = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/validate_login");
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        //        this.currentUserSubject = null;
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/exam-process.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/exam-process.service.ts ***!
  \***************************************************/
/*! exports provided: ExamProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamProcessService", function() { return ExamProcessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var ExamProcessService = /** @class */ (function () {
    function ExamProcessService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    ExamProcessService.prototype.candidate_exam_config = function (exam_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/candidate_exam_config/" + exam_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamProcessService.prototype.get_remain_start_time = function (exam_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/remain_start_time/" + exam_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamProcessService.prototype.get_remain_end_time = function (exam_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/remain_end_time/" + exam_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamProcessService.prototype.prepare_candidate_exam = function (exam_config_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/prepare_candidate_exam", JSON.stringify({ 'exam_config_id': exam_config_id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamProcessService.prototype.get_exam_questions = function (exam_config_id, page) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_question/" + exam_config_id + "/" + page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamProcessService.prototype.update_exam_question = function (candidateExamQuestionArr) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/candidate_exam", JSON.stringify(candidateExamQuestionArr))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamProcessService.prototype.finish_exam_question = function (exam_config_id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/candidate_exam_finish", JSON.stringify({ "exam_config_id": exam_config_id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamProcessService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ExamProcessService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExamProcessService);
    return ExamProcessService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/home");
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.contact = function (enquiry) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/contact", JSON.stringify(enquiry), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule, httpTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function() { return httpTranslateLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/fesm5/angularx-social-login.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/error/404.component */ "./src/app/views/error/404.component.ts");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/error/500.component */ "./src/app/views/error/500.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/alert.component */ "./src/app/_components/alert.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _views_examination_examination_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/examination/examination.module */ "./src/app/views/examination/examination.module.ts");
/* harmony import */ var _views_home_home_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/home/home.module */ "./src/app/views/home/home.module.ts");
/* harmony import */ var _views_login_login_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/login/login.module */ "./src/app/views/login/login.module.ts");
/* harmony import */ var _components_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_components/custom-material/custom-material.module */ "./src/app/_components/custom-material/custom-material.module.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_components/confirm-dialog/confirm-dialog.component */ "./src/app/_components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _views_activation_activation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/activation/activation.component */ "./src/app/views/activation/activation.component.ts");











var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"]("675225875182-pdor0og8gb39dqvros607vftvkhlemj8.apps.googleusercontent.com")
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"]("181795126486478")
    }
]);
function provideConfig() {
    return config;
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};

// Import containers




var APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutComponent"]
];

// Import routing module

// Import 3rd party components












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_15__["AppAsideModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_15__["AppBreadcrumbModule"].forRoot(),
                _coreui_angular__WEBPACK_IMPORTED_MODULE_15__["AppFooterModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_15__["AppHeaderModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_15__["AppSidebarModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(),
                //    ChartsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _components_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_26__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"],
                _views_examination_examination_module__WEBPACK_IMPORTED_MODULE_23__["ExaminationModule"],
                _views_home_home_module__WEBPACK_IMPORTED_MODULE_24__["HomeModule"],
                _views_login_login_module__WEBPACK_IMPORTED_MODULE_25__["LoginModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: httpTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                })
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
            ], APP_CONTAINERS, [
                _views_error_404_component__WEBPACK_IMPORTED_MODULE_12__["P404Component"],
                _views_error_500_component__WEBPACK_IMPORTED_MODULE_13__["P500Component"],
                _views_activation_activation_component__WEBPACK_IMPORTED_MODULE_28__["ActivationComponent"],
                _components_alert_component__WEBPACK_IMPORTED_MODULE_19__["AlertComponent"],
                _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"],
                _views_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _views_activation_activation_component__WEBPACK_IMPORTED_MODULE_28__["ActivationComponent"]
            ]),
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptor"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] },
                { provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"], useFactory: provideConfig }
            ],
            entryComponents: [_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// AOT compilation support
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/404.component */ "./src/app/views/error/404.component.ts");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/500.component */ "./src/app/views/error/500.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony import */ var _views_activation_activation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/activation/activation.component */ "./src/app/views/activation/activation.component.ts");



// Import Containers





var routes = [
    {
        path: 'dashboard',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'activate/:key',
        component: _views_activation_activation_component__WEBPACK_IMPORTED_MODULE_7__["ActivationComponent"],
        data: {
            title: 'Activation'
        }
    },
    {
        path: 'login',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Login Page'
        },
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/login/login.module */ "./src/app/views/login/login.module.ts")).then(function (m) { return m.LoginModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'default'
        },
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/home/home.module */ "./src/app/views/home/home.module.ts")).then(function (m) { return m.HomeModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/examination/examination.module */ "./src/app/views/examination/examination.module.ts")).then(function (m) { return m.ExaminationModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            /*      {
                    path: 'base',
                    loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
                  },
                  {
                    path: 'buttons',
                    loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
                  },
                  {
                    path: 'charts',
                   loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
                  }, */
            {
                path: 'dashboard',
                loadChildren: function () { return Promise.all(/*! import() | views-dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "./src/app/views/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
            },
            //      {
            //        path: 'icons',
            //        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
            //      },
            //      {
            //        path: 'notifications',
            //       loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
            //      },
            {
                path: 'theme',
                loadChildren: function () { return Promise.all(/*! import() | views-theme-theme-module */[__webpack_require__.e("common"), __webpack_require__.e("views-theme-theme-module")]).then(__webpack_require__.bind(null, /*! ./views/theme/theme.module */ "./src/app/views/theme/theme.module.ts")).then(function (m) { return m.ThemeModule; }); }
            }
            //      {
            //        path: 'widgets',
            //        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
            //      }
        ]
    },
    { path: '**', component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/default-layout/default-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_nav */ "./src/app/_nav.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent(router, authenticationService, translate) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.translate = translate;
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_2__["navItems"];
        this.isLoggedInExamOwner = false;
        this.isLoggedInCandidate = false;
        translate.addLangs(['en', 'nl', 'hl', 'es', 'fr', 'zh', 'ar', 'ru']);
        translate.setDefaultLang(this.translate.getBrowserLang());
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.role === 'exam_owner') {
            // authorised so return true
            this.isLoggedInExamOwner = true;
        }
        else if (currentUser && currentUser.role === 'candidate') {
            this.isLoggedInCandidate = true;
        }
    }
    DefaultLayoutComponent.prototype.toggleMinimize = function (e) {
        this.sidebarMinimized = e;
    };
    DefaultLayoutComponent.prototype.logout = function () {
        this.authenticationService.logout();
        window.location.reload();
    };
    DefaultLayoutComponent.prototype.switchLang = function (lang) {
        this.translate.use(lang);
    };
    DefaultLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./default-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/default-layout/index.ts":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "./src/app/containers/default-layout/default-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "./src/app/containers/index.ts":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "./src/app/containers/default-layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/activation/activation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/activation/activation.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FjdGl2YXRpb24vYWN0aXZhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/activation/activation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/activation/activation.component.ts ***!
  \**********************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ActivationComponent = /** @class */ (function () {
    function ActivationComponent(route, authenticationService, router, alertService) {
        var _this = this;
        this.route = route;
        this.authenticationService = authenticationService;
        this.router = router;
        this.alertService = alertService;
        this.route.paramMap.subscribe(function (params) {
            if (params.get('key')) {
                _this.activation_key = params.get('key');
                _this.authenticationService.activate(_this.activation_key)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(function (data) {
                    _this.router.navigate(["dashboard"]);
                }, function (error) {
                    _this.alertService.error(error, true);
                });
            }
        });
    }
    ActivationComponent.prototype.ngOnInit = function () {
    };
    ActivationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    ActivationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activation',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./activation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/activation/activation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./activation.component.css */ "./src/app/views/activation/activation.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], ActivationComponent);
    return ActivationComponent;
}());



/***/ }),

/***/ "./src/app/views/error/404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "./src/app/views/error/500.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P500Component = /** @class */ (function () {
    function P500Component() {
    }
    P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./500.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());



/***/ }),

/***/ "./src/app/views/examination/exam-landing/exam-landing.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/examination/exam-landing/exam-landing.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V4YW1pbmF0aW9uL2V4YW0tbGFuZGluZy9leGFtLWxhbmRpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/examination/exam-landing/exam-landing.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/examination/exam-landing/exam-landing.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExamLandingComponent, FormatTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamLandingComponent", function() { return ExamLandingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTimePipe", function() { return FormatTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_exam_process_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/exam-process.service */ "./src/app/_services/exam-process.service.ts");
/* harmony import */ var _models_exam_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_models/exam_config */ "./src/app/_models/exam_config.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");









var ExamLandingComponent = /** @class */ (function () {
    function ExamLandingComponent(formBuilder, route, router, authenticationService, examProcessService, alertService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.examProcessService = examProcessService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.page = 1;
        this.isPreviousDisabled = true;
        this.isFinalPage = false;
        this.counter = 0;
        this.tick = 1000;
        this.isFinished = false;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '10',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            //    uploadUrl: 'v1/image',
            //    uploadUrl: 'http://127.0.0.1:5000/upload-image', 
            //    uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                ['bold', 'italic'],
                ['fontSize']
            ]
        };
        this.exam_config = new _models_exam_config__WEBPACK_IMPORTED_MODULE_7__["ExamConfig"]();
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.exam_config.id = Number(params.get('id'));
                _this.examProcessService.candidate_exam_config(_this.exam_config.id)
                    .pipe()
                    .subscribe(function (data) {
                    _this.exam_config = data;
                    console.log(_this.exam_config);
                }, function (error) {
                    _this.alertService.error(error);
                    _this.loading = false;
                });
                _this.examProcessService.get_remain_end_time(_this.exam_config.id)
                    .pipe()
                    .subscribe(function (data) {
                    _this.counter = data;
                    _this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, _this.tick).subscribe(function () {
                        --_this.counter;
                        if (_this.counter < 0) {
                            _this.finish();
                        }
                    });
                }, function (error) {
                    _this.alertService.error(error, false);
                    _this.loading = false;
                });
            }
        });
    }
    ExamLandingComponent.prototype.ngOnInit = function () {
        this.getQuestions();
        //    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
    };
    ExamLandingComponent.prototype.preProcess = function () {
        this.alertService.clear();
        var returnval = true;
        this.candidateExamQuestionArr.forEach(function (value) {
            if (null != value.answer && value.answer.length > 50000) {
                returnval = false;
            }
            else {
                value.subjective_mark = 0;
                if (value.question_type == 1) {
                    if (value.radio_button_selected == 1) {
                        value.is_choice1_selected = 1;
                    }
                    if (value.radio_button_selected == 2) {
                        value.is_choice2_selected = 1;
                    }
                    if (value.radio_button_selected == 3) {
                        value.is_choice3_selected = 1;
                    }
                    if (value.radio_button_selected == 4) {
                        value.is_choice4_selected = 1;
                    }
                    if (value.radio_button_selected == 5) {
                        value.is_choice5_selected = 1;
                    }
                }
            }
        });
        if (!returnval) {
            this.alertService.error("ERR0010", true);
        }
        return returnval;
    };
    ExamLandingComponent.prototype.saveNext = function () {
        var _this = this;
        if (this.preProcess()) {
            this.examProcessService.update_exam_question(this.candidateExamQuestionArr)
                .pipe()
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
            this.page = this.page + 1;
            this.getQuestions();
        }
    };
    ExamLandingComponent.prototype.save = function () {
        var _this = this;
        if (this.preProcess()) {
            this.examProcessService.update_exam_question(this.candidateExamQuestionArr)
                .pipe()
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    ExamLandingComponent.prototype.saveFinish = function () {
        var _this = this;
        if (this.preProcess()) {
            this.countDown.unsubscribe();
            this.preProcess();
            this.examProcessService.update_exam_question(this.candidateExamQuestionArr)
                .pipe()
                .subscribe(function (data) {
                console.log(data);
                _this.finish();
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    ExamLandingComponent.prototype.finish = function () {
        var _this = this;
        if (!this.isFinished) {
            this.isFinished = true;
            this.countDown.unsubscribe();
            this.examProcessService.finish_exam_question(this.exam_config.id)
                .pipe()
                .subscribe(function (data) {
                console.log(data);
                _this.alertService.success("SUC0013", true);
                _this.authenticationService.logout();
                _this.router.navigate(["finish_exam"]);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    ExamLandingComponent.prototype.previous = function () {
        this.page = this.page - 1;
        this.getQuestions();
    };
    ExamLandingComponent.prototype.getQuestions = function () {
        var _this = this;
        this.examProcessService.get_exam_questions(this.exam_config.id, this.page)
            .pipe()
            .subscribe(function (data) {
            console.log(data);
            _this.candidateExamQuestionArr = data;
            _this.candidateExamQuestionArr.forEach(function (value) {
                if (value.question_type == 1) {
                    if (value.is_choice1_selected) {
                        value.radio_button_selected = 1;
                    }
                    if (value.is_choice2_selected) {
                        value.radio_button_selected = 2;
                    }
                    if (value.is_choice3_selected) {
                        value.radio_button_selected = 3;
                    }
                    if (value.is_choice4_selected) {
                        value.radio_button_selected = 4;
                    }
                    if (value.is_choice5_selected) {
                        value.radio_button_selected = 5;
                    }
                }
            });
            _this.isPreviousDisabled = _this.page < 2;
            _this.isFinalPage = _this.exam_config.total_question <= _this.exam_config.question_per_page * _this.page;
            console.log(_this.isFinalPage);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamLandingComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: _services_exam_process_service__WEBPACK_IMPORTED_MODULE_6__["ExamProcessService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    ExamLandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exam-landing',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exam-landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/exam-landing/exam-landing.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exam-landing.component.css */ "./src/app/views/examination/exam-landing/exam-landing.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _services_exam_process_service__WEBPACK_IMPORTED_MODULE_6__["ExamProcessService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], ExamLandingComponent);
    return ExamLandingComponent;
}());

var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return (("00" + minutes).slice(-2) +
            ":" +
            ("00" + Math.floor(value - minutes * 60)).slice(-2));
    };
    FormatTimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "formatTime"
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());



/***/ }),

/***/ "./src/app/views/examination/exam-login/exam-login.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/examination/exam-login/exam-login.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V4YW1pbmF0aW9uL2V4YW0tbG9naW4vZXhhbS1sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/examination/exam-login/exam-login.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/examination/exam-login/exam-login.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExamLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamLoginComponent", function() { return ExamLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _containers_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../containers/default-layout/default-layout.component */ "./src/app/containers/default-layout/default-layout.component.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);









var ExamLoginComponent = /** @class */ (function () {
    function ExamLoginComponent(formBuilder, route, router, authenticationService, alertService, defaultLayoutComponent) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.defaultLayoutComponent = defaultLayoutComponent;
        this.loading = false;
        this.submitted = false;
        defaultLayoutComponent.isLoggedInCandidate = true;
    }
    ExamLoginComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/login_exam']);
        }
        this.loginFormCandidate = this.formBuilder.group({
            c_exam_config_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            c_email: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].email],
            c_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'start_exam';
    };
    Object.defineProperty(ExamLoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginFormCandidate.controls; },
        enumerable: true,
        configurable: true
    });
    ExamLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginFormCandidate.invalid) {
            this.alertService.error("ERR0008");
            return;
        }
        this.loading = true;
        debugger;
        this.authenticationService.login_exam(this.f.c_exam_config_id.value, this.f.c_email.value, this.f.c_password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl, _this.f.c_exam_config_id.value]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ExamLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _containers_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutComponent"] }
    ]; };
    ExamLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exam-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exam-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/exam-login/exam-login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exam-login.component.css */ "./src/app/views/examination/exam-login/exam-login.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _containers_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutComponent"]])
    ], ExamLoginComponent);
    return ExamLoginComponent;
}());



/***/ }),

/***/ "./src/app/views/examination/examination-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/examination/examination-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExaminationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationRoutingModule", function() { return ExaminationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_exam_start_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start-exam/start-exam.component */ "./src/app/views/examination/start-exam/start-exam.component.ts");
/* harmony import */ var _exam_login_exam_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-login/exam-login.component */ "./src/app/views/examination/exam-login/exam-login.component.ts");
/* harmony import */ var _exam_landing_exam_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exam-landing/exam-landing.component */ "./src/app/views/examination/exam-landing/exam-landing.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_helpers/auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony import */ var _finish_exam_finish_exam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finish-exam/finish-exam.component */ "./src/app/views/examination/finish-exam/finish-exam.component.ts");









var routes = [
    {
        path: '',
        data: {
            title: 'Theme'
        },
        children: [
            {
                path: 'start_exam/:id',
                component: _start_exam_start_exam_component__WEBPACK_IMPORTED_MODULE_4__["StartExamComponent"],
                data: {
                    title: 'Start Examination'
                },
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'login_exam',
                component: _exam_login_exam_login_component__WEBPACK_IMPORTED_MODULE_5__["ExamLoginComponent"],
                data: {
                    title: 'login examination'
                }
            },
            {
                path: 'landing_exam/:id',
                component: _exam_landing_exam_landing_component__WEBPACK_IMPORTED_MODULE_6__["ExamLandingComponent"],
                data: {
                    title: 'landing examination'
                },
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'finish_exam',
                component: _finish_exam_finish_exam_component__WEBPACK_IMPORTED_MODULE_8__["FinishExamComponent"],
                data: {
                    title: 'Finish examination'
                }
            }
        ]
    }
];
var ExaminationRoutingModule = /** @class */ (function () {
    function ExaminationRoutingModule() {
    }
    ExaminationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ExaminationRoutingModule);
    return ExaminationRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/examination/examination.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/examination/examination.module.ts ***!
  \*********************************************************/
/*! exports provided: ExaminationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationModule", function() { return ExaminationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _start_exam_start_exam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-exam/start-exam.component */ "./src/app/views/examination/start-exam/start-exam.component.ts");
/* harmony import */ var _examination_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examination-routing.module */ "./src/app/views/examination/examination-routing.module.ts");
/* harmony import */ var _exam_login_exam_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exam-login/exam-login.component */ "./src/app/views/examination/exam-login/exam-login.component.ts");
/* harmony import */ var _exam_landing_exam_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exam-landing/exam-landing.component */ "./src/app/views/examination/exam-landing/exam-landing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _finish_exam_finish_exam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finish-exam/finish-exam.component */ "./src/app/views/examination/finish-exam/finish-exam.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");











var ExaminationModule = /** @class */ (function () {
    function ExaminationModule() {
    }
    ExaminationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_start_exam_start_exam_component__WEBPACK_IMPORTED_MODULE_3__["StartExamComponent"], _exam_login_exam_login_component__WEBPACK_IMPORTED_MODULE_5__["ExamLoginComponent"], _exam_landing_exam_landing_component__WEBPACK_IMPORTED_MODULE_6__["ExamLandingComponent"], _finish_exam_finish_exam_component__WEBPACK_IMPORTED_MODULE_8__["FinishExamComponent"], _exam_landing_exam_landing_component__WEBPACK_IMPORTED_MODULE_6__["FormatTimePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _examination_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExaminationRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__["AngularEditorModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
            ]
        })
    ], ExaminationModule);
    return ExaminationModule;
}());



/***/ }),

/***/ "./src/app/views/examination/finish-exam/finish-exam.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/examination/finish-exam/finish-exam.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V4YW1pbmF0aW9uL2ZpbmlzaC1leGFtL2ZpbmlzaC1leGFtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/examination/finish-exam/finish-exam.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/examination/finish-exam/finish-exam.component.ts ***!
  \************************************************************************/
/*! exports provided: FinishExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishExamComponent", function() { return FinishExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinishExamComponent = /** @class */ (function () {
    function FinishExamComponent() {
    }
    FinishExamComponent.prototype.ngOnInit = function () {
    };
    FinishExamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finish-exam',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./finish-exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/finish-exam/finish-exam.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./finish-exam.component.css */ "./src/app/views/examination/finish-exam/finish-exam.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FinishExamComponent);
    return FinishExamComponent;
}());



/***/ }),

/***/ "./src/app/views/examination/start-exam/start-exam.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/examination/start-exam/start-exam.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V4YW1pbmF0aW9uL3N0YXJ0LWV4YW0vc3RhcnQtZXhhbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/examination/start-exam/start-exam.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/examination/start-exam/start-exam.component.ts ***!
  \**********************************************************************/
/*! exports provided: StartExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartExamComponent", function() { return StartExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_exam_process_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/exam-process.service */ "./src/app/_services/exam-process.service.ts");
/* harmony import */ var _models_exam_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_models/exam_config */ "./src/app/_models/exam_config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var StartExamComponent = /** @class */ (function () {
    function StartExamComponent(formBuilder, route, router, examProcessService, alertService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.examProcessService = examProcessService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.counter = 0;
        this.tick = 1000;
        this.exam_config = new _models_exam_config__WEBPACK_IMPORTED_MODULE_7__["ExamConfig"]();
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id'))
                _this.exam_config.id = Number(params.get('id'));
        });
    }
    StartExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.examProcessService.candidate_exam_config(this.exam_config.id)
            .pipe()
            .subscribe(function (data) {
            _this.exam_config = data;
            console.log(_this.exam_config);
        }, function (error) {
            _this.alertService.error(error, false);
            _this.loading = false;
        });
        this.examProcessService.get_remain_start_time(this.exam_config.id)
            .pipe()
            .subscribe(function (data) {
            _this.counter = data;
            _this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(0, _this.tick).subscribe(function () { return --_this.counter; });
        }, function (error) {
            _this.alertService.error(error, false);
            _this.loading = false;
        });
    };
    StartExamComponent.prototype.onSubmit = function () {
        var _this = this;
        this.countDown.unsubscribe();
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        this.loading = true;
        debugger;
        this.examProcessService.prepare_candidate_exam(this.exam_config.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(["landing_exam", _this.exam_config.id]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    StartExamComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_exam_process_service__WEBPACK_IMPORTED_MODULE_6__["ExamProcessService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    StartExamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-exam',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start-exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/examination/start-exam/start-exam.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start-exam.component.css */ "./src/app/views/examination/start-exam/start-exam.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_exam_process_service__WEBPACK_IMPORTED_MODULE_6__["ExamProcessService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], StartExamComponent);
    return StartExamComponent;
}());



/***/ }),

/***/ "./src/app/views/home/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/home/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/home/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/home/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/about/about.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.css */ "./src/app/views/home/about/about.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/views/home/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/home/contact/contact.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/home/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/home/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_enquiry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_models/enquiry */ "./src/app/_models/enquiry.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var ContactComponent = /** @class */ (function () {
    function ContactComponent(route, router, userService, alertService, translate) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.translate = translate;
        this.enquiry = new _models_enquiry__WEBPACK_IMPORTED_MODULE_6__["Enquiry"]();
        this.loading = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.userService.contact(this.enquiry)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success("SUC0012", true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ContactComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
    };
    ContactComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/contact/contact.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.css */ "./src/app/views/home/contact/contact.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/views/home/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/views/home/contact/contact.component.ts");






var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'contact_us',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/views/home/home-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/views/home/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/views/home/contact/contact.component.ts");
/* harmony import */ var _components_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_components/custom-material/custom-material.module */ "./src/app/_components/custom-material/custom-material.module.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");














var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot(),
                _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"],
                _components_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_10__["CustomMaterialModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_11__["CustomFormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            bootstrap: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/views/home/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/views/home/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/home/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(sanitizer, translate) {
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.video = { id: 'LSnbM9gF9Y0' };
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home/home.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/views/login/login.component.ts");




var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/fesm5/angularx-social-login.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");











var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService, authService, translate) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.authService = authService;
        this.translate = translate;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
        this.loginForm = this.formBuilder.group({
            email: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.signUpForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            retype_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "fs", {
        get: function () { return this.signUpForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error, true);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.onForgotPassword = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.forgot_password(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success(data.message);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error, true);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.onSignup = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.signUpForm.invalid) {
            return;
        }
        if (this.fs.password.value != this.fs.retype_password.value) {
            this.alertService.error("ERR0001");
            return;
        }
        this.loading = true;
        this.authenticationService.signup(this.fs.email.value, this.fs.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.alertService.success(data.message);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID).then(function (x) {
            console.log(x);
            _this.authenticationService.signupSocialMedia(x.authToken, "GOOGLE")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        });
    };
    LoginComponent.prototype.signInWithFB = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID).then(function (x) {
            console.log(x);
            _this.authenticationService.signupSocialMedia(x.authToken, "FB")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        });
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/views/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/views/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "https://www.api.easyonlineexam.com"
    // apiUrl: "http://127.0.0.1"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular_UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map