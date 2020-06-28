import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../_services/alert.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  activation_key: any;
  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService
  ) {
    this.route.paramMap.subscribe(params => {
      if(params.get('key')){
        this.activation_key = params.get('key');
        this.authenticationService.activate(this.activation_key)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(["dashboard"]);
            },
            error => {
                this.alertService.error(error, true);
            });

      }
    });
   }

  ngOnInit(): void {
  }

}
