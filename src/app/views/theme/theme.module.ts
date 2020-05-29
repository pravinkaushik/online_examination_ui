// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ExamConfigComponent } from './exam-config.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeRoutingModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule    
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    ExamConfigComponent,
    CandidateComponent,
    CandidateListComponent    
  ],
  bootstrap: [ ExamConfigComponent ]
})
export class ThemeModule { }
