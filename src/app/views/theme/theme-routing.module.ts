import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { ExamConfigComponent } from './exam-config.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
