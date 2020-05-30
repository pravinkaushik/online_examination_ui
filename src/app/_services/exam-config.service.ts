import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { ExamConfig } from '../_models/exam_config';
import { Candidate } from '../_models/candidate';
import { ExamQuestion } from '../_models/exam_question';

@Injectable({
  providedIn: 'root'
})
export class ExamConfigService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // exam_config Changes
  get_exam_config_list() {
    return this.http.get<ExamConfig[]>(`${environment.apiUrl}/exam_config_all`)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  get_exam_config(exam_id) {
    return this.http.get<ExamConfig>(`${environment.apiUrl}/exam_config/`+exam_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  create_exam_config(exam_config) {
    return this.http.post<any>(`${environment.apiUrl}/exam_config`, JSON.stringify(exam_config))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  edit_exam_config(exam_config) {
    return this.http.put<any>(`${environment.apiUrl}/exam_config`, JSON.stringify(exam_config))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  // candidate Changes
  get_candidate_list(exam_config_id) {
    return this.http.get<Candidate[]>(`${environment.apiUrl}/candidate_all/`+exam_config_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  add_candidate(candidate) {
    return this.http.post<any>(`${environment.apiUrl}/candidate`, JSON.stringify(candidate))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  // exam_question Changes
  get_exam_question_list(exam_config_id) {
    return this.http.get<ExamQuestion[]>(`${environment.apiUrl}/exam_question_all/`+exam_config_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  get_exam_question(exam_question_id) {
    return this.http.get<ExamQuestion>(`${environment.apiUrl}/exam_question/`+exam_question_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }
  add_exam_question(exam_question) {
    return this.http.post<any>(`${environment.apiUrl}/exam_question`, JSON.stringify(exam_question))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }

  edit_exam_question(exam_question) {
    return this.http.put<any>(`${environment.apiUrl}/exam_question`, JSON.stringify(exam_question))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError)
      );
  }
  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }
 /*   private handleError<T>(operation = 'operation', result?: T) {
      
      debugger
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };

    }
    */
}