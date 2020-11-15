import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { PublicJobsListComponent } from './public-jobs-list/public-jobs-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CompanyProxyService } from 'src/shared/proxies/company-proxy.service';
import { JobsProxyService } from 'src/shared/proxies/jobs-proxy.service';
import { AccountServiceProxy, ConfigurationServiceProxy, DropdownProxyService } from 'src/shared/service-proxies';
import { httpInterceptorProviders } from 'src/shared/http-interceptors';
import { MatDialogModule } from '@angular/material/dialog';
import { JobDetailComponent } from './job-detail/job-detail.component';


@NgModule({
  declarations: [ PublicJobsListComponent, JobDetailComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    NgSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxChartsModule,
    NgxPaginationModule
  ]
  ,
  providers: [

    CompanyProxyService,
    JobsProxyService,
    DropdownProxyService,
    AccountServiceProxy,
    ConfigurationServiceProxy



  ],
})
export class JobsModule { }
