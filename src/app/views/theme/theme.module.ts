// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { SharedModule } from '../../shared.module';
import { Angular2CsvModule } from 'angular2-csv';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionVoiceComponent } from './question/question-voice.component';
import { QuestionVoiceSwitchComponent } from './question-voice-switch.component';
import { ExamResultFilterPipe } from '../../_components/exam_result-filter.pipe';

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
    CustomFormsModule,
    SharedModule,
    Angular2CsvModule,
    NgbModule
  ],
  declarations: [
    ExamResultFilterPipe,
    ExamConfigComponent,
    CandidateComponent,
    CandidateListComponent,
    QuestionListComponent,
    ResultListComponent,
    ResultComponent,
    ResultDashboardComponent,
    QuestionComponent,
    QuestionVoiceComponent,
    QuestionVoiceSwitchComponent    
  ],
  exports: [ExamConfigComponent],
  entryComponents: [
    QuestionComponent,
    QuestionVoiceComponent
  ],
  bootstrap: [ ExamConfigComponent ]
})
export class ThemeModule { }
