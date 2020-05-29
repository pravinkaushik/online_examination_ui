import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { ExamConfig } from '../_models/exam_config';
import { Candidate } from '../_models/candidate';

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

  get_exam_config_list() {
    debugger;
    return this.http.get<ExamConfig[]>(`${environment.apiUrl}/exam_config_all`)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<ExamConfig[]>('getHeroes', []))
      );
  }

  get_exam_config(exam_id) {
    return this.http.get<ExamConfig>(`${environment.apiUrl}/exam_config/`+exam_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<ExamConfig>('getHeroes', ))
      );
  }

  create_exam_config(exam_config) {
    return this.http.post<any>(`${environment.apiUrl}/exam_config`, JSON.stringify(exam_config))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<ExamConfig[]>('getHeroes', []))
      );
  }

  edit_exam_config(exam_config) {
    return this.http.put<any>(`${environment.apiUrl}/exam_config`, JSON.stringify(exam_config))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<ExamConfig[]>('getHeroes', []))
      );
  }

  get_candidate_list(exam_config_id) {
    debugger;
    return this.http.get<Candidate[]>(`${environment.apiUrl}/candidate_all/`+exam_config_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Candidate[]>('getHeroes', []))
      );
  }

  add_candidate(candidate) {
    return this.http.post<any>(`${environment.apiUrl}/candidate`, JSON.stringify(candidate))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Candidate[]>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}