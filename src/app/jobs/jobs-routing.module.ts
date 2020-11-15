import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';


import { PublicJobsListComponent } from './public-jobs-list/public-jobs-list.component';

const routes: Routes = [
  { path: 'list/:type', component: PublicJobsListComponent},
  { path: 'list', component: PublicJobsListComponent },
  { path: 'detail/:id', component: JobDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
