import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

import { ConfirmDialogComponent } from '../../_components/confirm-dialog/confirm-dialog.component';
import { CustomMaterialModule } from '../../_components/custom-material/custom-material.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    BsDropdownModule,
    CommonModule,
    CustomMaterialModule,
    ButtonsModule.forRoot(),
    SharedModule
  ],
  declarations: [ DashboardComponent]
})
export class DashboardModule { }
