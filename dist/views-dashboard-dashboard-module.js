(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          {{'dashboard_header' | translate}}\n        </div>\n        <div class=\"card-header\">\n          <button type=\"button\" (click)=\"goToAddExamConfig()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>{{'add_test' | translate}}</button>\n        </div>\n        <div class=\"card-body\">\n          <br>\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                <th class=\"text-left\">{{'test_name' | translate}}</th>\n                <th class=\"text-left\">{{'test_title' | translate}}</th>\n                <th class=\"text-center\">{{'candidate' | translate}}</th>\n                <th class=\"text-center\">{{'question' | translate}}</th>\n                <th class=\"text-center\">{{'edit' | translate}}</th>\n                <th class=\"text-center\">{{'delete' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let examConfig of examConfigs; let idx = index\">\n                <td class=\"text-center\">\n                  <div>{{idx +1}}</div>\n                </td>\n                <td class=\"text-left\">\n                  <div>{{examConfig.exam_name}}</div>\n                </td>\n                <td class=\"text-left\">\n                  {{examConfig.exam_title}}\n                </td>\n                <td>\n                  <button type=\"button\" (click)=\"goToCandidates(examConfig.id)\" class=\"btn btn-block btn-warning\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    {{'candidates' | translate}}\n                  </button>\n                </td>\n                <td>\n                  <button type=\"button\" (click)=\"goToQuestions(examConfig.id)\" class=\"btn btn-block btn-warning\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    {{'questions' | translate}}\n                  </button>\n                </td>\n                <td class=\"text-center\">\n                  <button type=\"button\" (click)=\"goToEditExamConfig(examConfig.id)\" class=\"btn btn-block btn-info\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    {{'edit' | translate}}\n                  </button>\n                </td>\n                <td>           \n                  <button type=\"button\" (click)=\"confirmDialog(examConfig.id)\" class=\"btn btn-block btn-danger\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    {{'delete' | translate}}\n                  </button>                 \n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _services_exam_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/exam-config.service */ "./src/app/_services/exam-config.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_components/confirm-dialog/confirm-dialog.component */ "./src/app/_components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");











var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(formBuilder, route, dialog, router, authenticationService, examConfigService, alertService, translate) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.authenticationService = authenticationService;
        this.examConfigService = examConfigService;
        this.alertService = alertService;
        this.translate = translate;
        this.loading = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.examConfigs = [];
        this.examConfigService.get_exam_config_list()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (data) {
            _this.examConfigs = data;
            console.log(_this.examConfigs);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    DashboardComponent.prototype.goToEditExamConfig = function (id) {
        this.router.navigate(['/theme/exam_config', id]);
    };
    DashboardComponent.prototype.goToAddExamConfig = function () {
        this.router.navigate(['/theme/exam_config', 0]);
    };
    DashboardComponent.prototype.goToCandidates = function (id) {
        this.router.navigate(['/theme/candidatelist', id]);
    };
    DashboardComponent.prototype.goToQuestions = function (id) {
        this.router.navigate(['/theme/questionlist', id]);
    };
    DashboardComponent.prototype.confirmDialog = function (exam_config_id) {
        var _this = this;
        var message = "confirm_delete";
        var dialogData = new _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModel"]("Confirm Action", message);
        var dialogRef = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(function (dialogResult) {
            _this.loading = true;
            if (dialogResult) {
                _this.examConfigService.delete_exam_config(exam_config_id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                    .subscribe(function (data) {
                    _this.alertService.success("SUC0004");
                    _this.loading = false;
                    _this.examConfigs = _this.examConfigs.filter(function (item) { return item.id !== exam_config_id; });
                    _this.router.navigate(['dashboard']);
                }, function (error) {
                    _this.alertService.error(error);
                    _this.loading = false;
                });
            }
            else {
                _this.loading = false;
            }
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _services_exam_config_service__WEBPACK_IMPORTED_MODULE_5__["ExamConfigService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services_exam_config_service__WEBPACK_IMPORTED_MODULE_5__["ExamConfigService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_components/custom-material/custom-material.module */ "./src/app/_components/custom-material/custom-material.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _components_custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
                _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map