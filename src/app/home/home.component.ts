import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    current_identity ;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        debugger;
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        debugger;
        this.userService.getAll()
            .pipe(first())
            .subscribe(ret => this.currentUser.current_identity = JSON.parse(JSON.stringify(ret)).current_identity);
    }
}