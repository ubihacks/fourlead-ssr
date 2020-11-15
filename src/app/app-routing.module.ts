import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Landing/about-us/about-us.component';
import { FreeBehaviourAssessmentComponent } from './Landing/free-behaviour-assessment/free-behaviour-assessment.component';
import { HomeComponent } from './Landing/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'free-behaviour-assessment', component: FreeBehaviourAssessmentComponent },
  { path: 'about-us', component: AboutUsComponent },

  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
