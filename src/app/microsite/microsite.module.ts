import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrositeRoutingModule } from './microsite-routing.module';
import { MicrositeLandingComponent } from './microsite-landing/microsite-landing.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ MicrositeLandingComponent],
  imports: [
    CommonModule,
    MicrositeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MicrositeModule { }
