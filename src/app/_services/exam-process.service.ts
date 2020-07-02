import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { ExamConfig } from '../_models/exam_config';

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
      .pipe(retry(3),
        tap(_ => console.log('fetched heroes'))
      );
  }

  get_remain_start_time(exam_id) {
    return this.http.get<any>(`${environment.apiUrl}/remain_start_time/`+exam_id)
      .pipe(retry(3),
        tap(_ => console.log('fetched heroes'))
      );
  }
  
  get_remain_end_time(exam_id) {
    return this.http.get<any>(`${environment.apiUrl}/remain_end_time/`+exam_id)
      .pipe(retry(3),
        tap(_ => console.log('fetched heroes'))
      );
  }

  prepare_candidate_exam(exam_config_id) {
    return this.http.post<any>(`${environment.apiUrl}/prepare_candidate_exam`, JSON.stringify({'exam_config_id':exam_config_id}))
      .pipe(
        tap(_ => console.log('fetched heroes'))
      );
  }

  get_exam_questions(exam_config_id, page) {
    return this.http.get<CandidateExamQuestion[]>(`${environment.apiUrl}/exam_question/`+exam_config_id+"/"+page)
      .pipe(retry(3),
        tap(_ => console.log('fetched heroes'))
      );
  }

  update_exam_question(candidateExamQuestionArr) {
    return this.http.put<any>(`${environment.apiUrl}/candidate_exam`, JSON.stringify(candidateExamQuestionArr))
      .pipe(retry(3),
        tap(_ => console.log('fetched heroes'))
      );
  }

  finish_exam_question(exam_config_id) {
    return this.http.put<any>(`${environment.apiUrl}/candidate_exam_finish`, JSON.stringify({"exam_config_id":exam_config_id}))
      .pipe(retry(3),
        tap(_ => console.log('fetched heroes'))
      );
  }
}