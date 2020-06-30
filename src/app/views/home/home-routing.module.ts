import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'contact_us',
    component: ContactComponent,
    data: {
      title: 'Dashboard'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }