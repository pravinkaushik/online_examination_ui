import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomMaterialModule } from '../../_components/custom-material/custom-material.module';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [
    FormsModule,
    BsDropdownModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    HomeRoutingModule,
    CustomMaterialModule,
    CustomFormsModule,
    SharedModule
  ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule { }
