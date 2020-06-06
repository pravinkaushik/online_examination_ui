import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public isLoggedInExamOwner = false;
  public isLoggedInCandidate = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService

  ) {
    const currentUser = this.authenticationService.currentUserValue;
    debugger
    if (currentUser && currentUser.role ==='exam_owner') {
        // authorised so return true
        this.isLoggedInExamOwner = true;
    }else if(currentUser && currentUser.role ==='candidate'){
        this.isLoggedInCandidate = true;
    }
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    this.authenticationService.logout();
    window.location.reload();
  }
}