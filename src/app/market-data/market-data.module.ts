import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketDataRoutingModule } from './market-data-routing.module';
import { MarketDataShellComponent } from './market-data-shell/market-data-shell.component';


@NgModule({
  declarations: [MarketDataShellComponent],
  imports: [
    CommonModule,
    MarketDataRoutingModule
  ]
})
export class MarketDataModule { }
