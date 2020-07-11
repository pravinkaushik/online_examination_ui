import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, concat, throwError } from 'rxjs';
import { tap, catchError, retry, retryWhen, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { ExamConfig } from '../_models/exam_config';
import { Candidate } from '../_models/candidate';
import { ExamQuestion } from '../_models/exam_question';
import { ExamResult } from '../_models/exam_result';
import { Result } from '../_models/result';

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
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  get_exam_config(exam_id) {
    return this.http.get<ExamConfig>(`${environment.apiUrl}/exam_config/`+exam_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  delete_exam_config(exam_id) {
    return this.http.delete<any>(`${environment.apiUrl}/exam_config/`+exam_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  create_exam_config(exam_config) {
    return this.http.post<any>(`${environment.apiUrl}/exam_config`, JSON.stringify(exam_config))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  edit_exam_config(exam_config) {
    return this.http.put<any>(`${environment.apiUrl}/exam_config`, JSON.stringify(exam_config))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  get_exam_result_list(exam_config_id) {
    return this.http.get<ExamResult[]>(`${environment.apiUrl}/exam_result_all/`+exam_config_id)
      .pipe(retry(3),
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  get_exam_result(exam_config_id, candidate_id) {
    return this.http.get<Result[]>(`${environment.apiUrl}/exam_result/`+exam_config_id+`/`+candidate_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  update_exam_marks(id, subjective_mark, exam_config_id) {
    return this.http.put<any>(`${environment.apiUrl}/exam_marks`, JSON.stringify({"id": id, "subjective_mark": subjective_mark, "exam_config_id":exam_config_id}))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  // candidate Changes
  get_candidate_list(exam_config_id) {
    return this.http.get<Candidate[]>(`${environment.apiUrl}/candidate_all/`+exam_config_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  add_candidate(candidate) {
    return this.http.post<any>(`${environment.apiUrl}/candidate`, JSON.stringify(candidate))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  delete_candidate(candidate_id) {
    return this.http.delete<any>(`${environment.apiUrl}/candidate/`+candidate_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }
  resend_password(candidate_id) {
    return this.http.get<any>(`${environment.apiUrl}/resend_invitation/`+candidate_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }
  
  publish_result(candidate_id, marks) {
    return this.http.get<any>(`${environment.apiUrl}/publish_result/`+candidate_id+`/`+marks)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  // exam_question Changes
  get_exam_question_list(exam_config_id) {
    return this.http.get<ExamQuestion[]>(`${environment.apiUrl}/exam_question_all/`+exam_config_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  get_exam_question(exam_question_id) {
    return this.http.get<ExamQuestion>(`${environment.apiUrl}/exam_question/`+exam_question_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }
  add_exam_question(exam_question) {
    return this.http.post<any>(`${environment.apiUrl}/exam_question`, JSON.stringify(exam_question))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  edit_exam_question(exam_question) {
    return this.http.put<any>(`${environment.apiUrl}/exam_question`, JSON.stringify(exam_question))
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

  delete_exam_question(exam_question_id) {
    return this.http.delete<any>(`${environment.apiUrl}/exam_question/`+exam_question_id)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        retryWhen(errors =>
          errors.pipe(
            delay(1000),   
            tap(errorStatus => {
              if (!errorStatus.startsWith('Unknown Error')) {
                throw errorStatus;
              }
              console.log('Retrying...');
            }),
            take(3),
            o => concat(o, throwError(`Sorry, We found some problem while processing. Please try after sometime.`))
          )
        )
      );
  }

}