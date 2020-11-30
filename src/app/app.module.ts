import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Landing/home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SessionServiceProxy } from 'src/shared/proxies/session-proxy.service';
import { ToastrModule } from 'ngx-toastr';
import { AboutUsComponent } from './Landing/about-us/about-us.component';
import { FreeBehaviourAssessmentComponent } from './Landing/free-behaviour-assessment/free-behaviour-assessment.component';
import { JsonLdModule } from 'ngx-seo';
import { GlobalErrorHandler } from 'src/shared/global-error-handler';
import { AppConfigService } from 'src/shared/AppConfigService';
import { httpInterceptorProviders } from 'src/shared/http-interceptors';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserStateInterceptor } from 'src/shared/http-interceptors/browserstateinterceptor';
import { AssessmentProxyService } from 'src/shared/proxies/assessment-proxy.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    FreeBehaviourAssessmentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JsonLdModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AssessmentProxyService,
    SessionServiceProxy,
    httpInterceptorProviders,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return async () => {
          return await appConfigService
            .loadAppConfig()
            .then((s) => appConfigService.loadLoginInfo());
        };
      },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
