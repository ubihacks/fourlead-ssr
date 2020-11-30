import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectivelyScalePerformanceComponent } from './blog-detail/effectively-scale-performance/effectively-scale-performance.component';
import { HireRightEmployeesComponent } from './blog-detail/hire-right-employees/hire-right-employees.component';
import { SixActionableStepsThatDetermineComponent } from './blog-detail/six-actionable-steps-that-determine/six-actionable-steps-that-determine.component';
import { WorstWorkplaceCultureComponent } from './blog-detail/worst-workplace-culture/worst-workplace-culture.component';

import { BlogLandingComponent } from './blog-landing/blog-landing.component';

const routes: Routes = [
  { path: '', component: BlogLandingComponent },
  { path: 'effectively-scale-performance', component: EffectivelyScalePerformanceComponent },
  { path: 'hire-right-employees', component: HireRightEmployeesComponent },
  { path: 'six-actionable-steps-that-determine', component: SixActionableStepsThatDetermineComponent },
  { path: 'worst-workplace-culture', component: WorstWorkplaceCultureComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
