(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Bmr2:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("26FU"),r=n("5tAl"),i=n("xMyE"),c=n("AytR"),a=n("CcnG"),p=n("t/Na"),u=function(){function e(e){this.http=e,this.currentUserSubject=new o.a(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}return e.prototype.get_exam_config_list=function(){return this.http.get(c.a.apiUrl+"/exam_config_all").pipe(Object(r.a)(3),Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.get_exam_config=function(e){return this.http.get(c.a.apiUrl+"/exam_config/"+e).pipe(Object(r.a)(3),Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.delete_exam_config=function(e){return this.http.delete(c.a.apiUrl+"/exam_config/"+e).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.create_exam_config=function(e){return this.http.post(c.a.apiUrl+"/exam_config",JSON.stringify(e)).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.edit_exam_config=function(e){return this.http.put(c.a.apiUrl+"/exam_config",JSON.stringify(e)).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.get_exam_result_list=function(e){return this.http.get(c.a.apiUrl+"/exam_result_all/"+e).pipe(Object(r.a)(3),Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.get_exam_result=function(e,t){return this.http.get(c.a.apiUrl+"/exam_result/"+e+"/"+t).pipe(Object(r.a)(3),Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.update_exam_marks=function(e,t,n){return this.http.put(c.a.apiUrl+"/exam_marks",JSON.stringify({id:e,subjective_mark:t,exam_config_id:n})).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.get_candidate_list=function(e){return this.http.get(c.a.apiUrl+"/candidate_all/"+e).pipe(Object(r.a)(3),Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.add_candidate=function(e){return this.http.post(c.a.apiUrl+"/candidate",JSON.stringify(e)).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.delete_candidate=function(e){return this.http.delete(c.a.apiUrl+"/candidate/"+e).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.resend_password=function(e){return this.http.get(c.a.apiUrl+"/resend_invitation/"+e).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.get_exam_question_list=function(e){return this.http.get(c.a.apiUrl+"/exam_question_all/"+e).pipe(Object(r.a)(3),Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.get_exam_question=function(e){return this.http.get(c.a.apiUrl+"/exam_question/"+e).pipe(Object(r.a)(3),Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.add_exam_question=function(e){return this.http.post(c.a.apiUrl+"/exam_question",JSON.stringify(e)).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.edit_exam_question=function(e){return this.http.put(c.a.apiUrl+"/exam_question",JSON.stringify(e)).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.prototype.delete_exam_question=function(e){return this.http.delete(c.a.apiUrl+"/exam_question/"+e).pipe(Object(i.a)((function(e){return console.log("fetched heroes")})))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](p.c))},token:e,providedIn:"root"}),e}()}}]);