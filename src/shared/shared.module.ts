import { NgModule, ModuleWithProviders } from '@angular/core';
import { AbpPaginationControlsComponent } from './pagination/abp-pagination-controls.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { CounterDirective } from './directives/counter.directive';
import { UtilityService } from './utils/utility-service';
import { JobsHardSkillsfilterPipe } from './pipes/jobs-hard-skillsfilter.pipe';
import { JobsLanguagefilterPipe } from './pipes/jobs-languagefilter.pipe';
import { JobsSoftSkillsfilterPipe } from './pipes/jobs-soft-skillsfilter.pipe';
import { UserExperienceCountfilterPipe } from './pipes/user-experience-countfilter.pipe';
import { UserExperienceSortingfilterPipe } from './pipes/user-experience-sortingfilter.pipe';
import { RouterModule } from '@angular/router';
import { CareerJobCardComponent } from './shared-components/career-job-card/career-job-card.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { JobCardPublicComponent } from './shared-components/job-card-public/job-card-public.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  declarations: [
    AbpPaginationControlsComponent,
    JobCardPublicComponent,
    JobsHardSkillsfilterPipe,
    JobsLanguagefilterPipe,
    JobsSoftSkillsfilterPipe,
    UserExperienceCountfilterPipe,
    UserExperienceSortingfilterPipe,
    CounterDirective,
    CareerJobCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    AbpPaginationControlsComponent,
    JobCardPublicComponent,
    HeaderComponent,
    FooterComponent,
    CareerJobCardComponent,
    JobsHardSkillsfilterPipe,
    JobsLanguagefilterPipe,
    JobsSoftSkillsfilterPipe,
    UserExperienceCountfilterPipe,
    UserExperienceSortingfilterPipe,
    CounterDirective

  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        UtilityService
      ]
    };
  }
}
