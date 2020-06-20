import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { ExamConfigComponent } from './exam-config.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'exam_config/:id',
        component: ExamConfigComponent,
        data: {
          title: 'Create Examination'
        }
      },
      {
        path: 'result_dashboard',
        component: ResultDashboardComponent,
        data: {
          title: 'Result Dashboard'
        }
      },
      {
        path: 'exam_results/:id',
        component: ResultListComponent,
        data: {
          title: 'Examination Results'
        }
      },
      {
        path: 'exam_result/:exam_config_id/:candidate_id',
        component: ResultComponent,
        data: {
          title: 'Examination Result'
        }
      },
      {
        path: 'candidatelist/:id',
        component: CandidateListComponent,
        data: {
          title: 'candidate'
        }
      },
      {
        path: 'candidate/:id',
        component: CandidateComponent,
        data: {
          title: 'Add Candidate'
        }
      },
      {
        path: 'questionlist/:id',
        component: QuestionListComponent,
        data: {
          title: 'Question list'
        }
      },
      {
        path: 'question/:exam_config_id/:id',
        component: QuestionComponent,
        data: {
          title: 'Add Question'
        }
      }
/*      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
