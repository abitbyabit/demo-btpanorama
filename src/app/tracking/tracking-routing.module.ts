import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingShellComponent } from './tracking-shell/tracking-shell.component';

const routes: Routes = [
  { path: "", component: TrackingShellComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingRoutingModule { }
