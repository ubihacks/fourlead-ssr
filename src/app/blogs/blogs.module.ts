import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { SharedModule } from 'src/shared/shared.module';
import { WorstWorkplaceCultureComponent } from './blog-detail/worst-workplace-culture/worst-workplace-culture.component';
import { SixActionableStepsThatDetermineComponent } from './blog-detail/six-actionable-steps-that-determine/six-actionable-steps-that-determine.component';
import { HireRightEmployeesComponent } from './blog-detail/hire-right-employees/hire-right-employees.component';
import { EffectivelyScalePerformanceComponent } from './blog-detail/effectively-scale-performance/effectively-scale-performance.component';


@NgModule({
  declarations: [
    BlogLandingComponent,
    WorstWorkplaceCultureComponent,
    SixActionableStepsThatDetermineComponent,
    HireRightEmployeesComponent,
    EffectivelyScalePerformanceComponent
  ],
  imports: [CommonModule, BlogsRoutingModule, SharedModule]
})
export class BlogsModule { }
