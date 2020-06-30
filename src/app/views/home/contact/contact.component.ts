import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Enquiry } from '../../../_models/enquiry';
import { UserService } from '../../../_services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  enquiry: Enquiry = new Enquiry();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.spinner.show();
      this.userService.contact(this.enquiry)
      .pipe(first())
      .subscribe(
          data => {
            this.alertService.success("SUC0012", true);
            this.spinner.hide();
            this.enquiry = new Enquiry();
          },
          error => {
              this.alertService.error(error);
              this.spinner.hide();
          });
  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }
}
