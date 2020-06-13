import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartExamComponent } from './start-exam/start-exam.component';
import { ExaminationRoutingModule } from './examination-routing.module';
import { ExamLoginComponent } from './exam-login/exam-login.component';
import { ExamLandingComponent, FormatTimePipe } from './exam-landing/exam-landing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FinishExamComponent } from './finish-exam/finish-exam.component';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [StartExamComponent, ExamLoginComponent, ExamLandingComponent, FinishExamComponent, FormatTimePipe],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule
  ]
})
export class ExaminationModule { }
