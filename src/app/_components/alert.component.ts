import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services/alert.service';
import { TranslateService } from '@ngx-translate/core';


@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;
    title: any;
    constructor(private alertService: AlertService,
        public translate: TranslateService) { }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        this.title = "success"
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        this.title = "danger"
                        break;
                }

                this.message = message;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}