import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [
    FormsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot(),
    HomeRoutingModule
  ],
})
export class HomeModule { }
