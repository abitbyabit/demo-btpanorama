import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessShellComponent } from './business-shell/business-shell.component';


@NgModule({
  declarations: [BusinessShellComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
