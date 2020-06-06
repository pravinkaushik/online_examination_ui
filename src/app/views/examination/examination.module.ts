import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartExamComponent } from './start-exam/start-exam.component';
import { ExaminationRoutingModule } from './examination-routing.module';
import { ExamLoginComponent } from './exam-login/exam-login.component';
import { ExamLandingComponent } from './exam-landing/exam-landing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StartExamComponent, ExamLoginComponent, ExamLandingComponent],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ExaminationModule { }
