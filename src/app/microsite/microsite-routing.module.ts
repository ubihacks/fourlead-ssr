import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrositeLandingComponent } from './microsite-landing/microsite-landing.component';

const routes: Routes = [
  { path: '', component: MicrositeLandingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicrositeRoutingModule { }
