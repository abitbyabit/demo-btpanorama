import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsShellComponent } from './investments-shell/investments-shell.component';


@NgModule({
  declarations: [InvestmentsShellComponent],
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ]
})
export class InvestmentsModule { }
