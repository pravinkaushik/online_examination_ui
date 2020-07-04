(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_services/exam-config.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/exam-config.service.ts ***!
  \**************************************************/
/*! exports provided: ExamConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamConfigService", function() { return ExamConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var ExamConfigService = /** @class */ (function () {
    function ExamConfigService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    // exam_config Changes
    ExamConfigService.prototype.get_exam_config_list = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_config_all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.get_exam_config = function (exam_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_config/" + exam_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.delete_exam_config = function (exam_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_config/" + exam_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.create_exam_config = function (exam_config) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_config", JSON.stringify(exam_config))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.edit_exam_config = function (exam_config) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_config", JSON.stringify(exam_config))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.get_exam_result_list = function (exam_config_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_result_all/" + exam_config_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.get_exam_result = function (exam_config_id, candidate_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_result/" + exam_config_id + "/" + candidate_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.update_exam_marks = function (id, subjective_mark, exam_config_id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_marks", JSON.stringify({ "id": id, "subjective_mark": subjective_mark, "exam_config_id": exam_config_id }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    // candidate Changes
    ExamConfigService.prototype.get_candidate_list = function (exam_config_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/candidate_all/" + exam_config_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.add_candidate = function (candidate) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/candidate", JSON.stringify(candidate))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.delete_candidate = function (candidate_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/candidate/" + candidate_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.resend_password = function (candidate_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/resend_invitation/" + candidate_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    // exam_question Changes
    ExamConfigService.prototype.get_exam_question_list = function (exam_config_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_question_all/" + exam_config_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.get_exam_question = function (exam_question_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_question/" + exam_question_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.add_exam_question = function (exam_question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_question", JSON.stringify(exam_question))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.edit_exam_question = function (exam_question) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_question", JSON.stringify(exam_question))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.prototype.delete_exam_question = function (exam_question_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/exam_question/" + exam_question_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched heroes'); }));
    };
    ExamConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ExamConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExamConfigService);
    return ExamConfigService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map