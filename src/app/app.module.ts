import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Landing/home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SessionServiceProxy } from 'src/shared/proxies/session-proxy.service';
import { ToastrModule } from 'ngx-toastr';
import { AboutUsComponent } from './Landing/about-us/about-us.component';
import { FreeBehaviourAssessmentComponent } from './Landing/free-behaviour-assessment/free-behaviour-assessment.component';
import { JsonLdModule } from 'ngx-seo';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    FreeBehaviourAssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule ,
    HttpClientModule,
    JsonLdModule,
    ToastrModule.forRoot(),
  ],
  providers: [

    SessionServiceProxy

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
