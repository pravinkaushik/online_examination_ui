import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { ExamConfig } from '../_models/exam_config';
import { Candidate } from '../_models/candidate';
import { ExamQuestion } from '../_models/exam_question';
import { CandidateExamQuestion } from '../_models/candidate_exam_question';

@Injectable({
  providedIn: 'root'
})
export class ExamProcessService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  candidate_exam_config(exam_id) {
    return this.http.get<ExamConfig>(`${environment.apiUrl}/candidate_exam_config/`+exam_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  prepare_candidate_exam(exam_config_id) {
    return this.http.post<any>(`${environment.apiUrl}/prepare_candidate_exam`, JSON.stringify({'exam_config_id':exam_config_id}))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  get_exam_questions(exam_config_id, page) {
    return this.http.get<CandidateExamQuestion[]>(`${environment.apiUrl}/exam_question/`+exam_config_id+"/"+page)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  update_exam_question(candidateExamQuestionArr) {
    return this.http.put<any>(`${environment.apiUrl}/candidate_exam`, JSON.stringify(candidateExamQuestionArr))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  finish_exam_question(exam_config_id) {
    return this.http.put<any>(`${environment.apiUrl}/candidate_exam_finish`, JSON.stringify({"exam_config_id":exam_config_id}))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }

}