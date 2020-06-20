import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Enquiry } from '../../../_models/enquiry';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  enquiry: Enquiry = new Enquiry();
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){

    this.http.post<any>(`${environment.apiUrl}/contact`, JSON.stringify(this.enquiry))
      .pipe(
        tap(_ => {
          console.log('fetched heroes')
          this.alertService.success("Thanks for contact us. Will review sortly.", true);
        }),
        catchError(this.handleError)
      );

  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }
}
