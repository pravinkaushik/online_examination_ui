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
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService

  ) {

  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(){
    debugger
    this.authenticationService.logout();
//    this.router.navigate(['/login']);
    window.location.reload();
  }
}
