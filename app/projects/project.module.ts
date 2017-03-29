import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectDetailGuard } from './project-guard.service';

import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectService } from './project.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'projects', component: ProjectListComponent },
      { path: 'project/:id',
        canActivate: [ ProjectDetailGuard],
        component: ProjectDetailComponent
      }
    ])
  ],
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFilterPipe
  ],
  providers: [
    ProjectService,
    ProjectDetailGuard
  ]
})
export class ProjectModule {}
