import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartExamComponent } from './start-exam/start-exam.component';
import { ExamLoginComponent } from './exam-login/exam-login.component';
import { ExamLandingComponent } from './exam-landing/exam-landing.component';
import { AuthGuard } from '../../_helpers/auth.guard';
import { FinishExamComponent } from './finish-exam/finish-exam.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: 'start_exam/:id',
        component: StartExamComponent,
        data: {
          title: 'Start Examination'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'login_exam',
        component: ExamLoginComponent,
        data: {
          title: 'login examination'
        }
      },
      {
        path: 'landing_exam/:id',
        component: ExamLandingComponent,
        data: {
          title: 'landing examination'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'finish_exam',
        component: FinishExamComponent,
        data: {
          title: 'Finish examination'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExaminationRoutingModule { }