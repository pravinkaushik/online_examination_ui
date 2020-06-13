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
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CustomFormsModule } from 'ng2-validation'
import { ConfirmDialogComponent } from '../../_components/confirm-dialog/confirm-dialog.component';
import { CustomMaterialModule } from '../../_components/custom-material/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeRoutingModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    HttpClientModule,
    AngularEditorModule,
    CustomMaterialModule,
    CustomFormsModule
  ],
  declarations: [
//    ColorsComponent,
//    TypographyComponent,
    ExamConfigComponent,
    CandidateComponent,
    CandidateListComponent,
    QuestionComponent,
    QuestionListComponent    
  ],
  bootstrap: [ ExamConfigComponent ]
})
export class ThemeModule { }
