import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingShellComponent } from './tracking-shell/tracking-shell.component';


@NgModule({
  declarations: [TrackingShellComponent],
  imports: [
    CommonModule,
    TrackingRoutingModule
  ]
})
export class TrackingModule { }
