import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketDataShellComponent } from './market-data-shell/market-data-shell.component';

const routes: Routes = [
  { path: "", component: MarketDataShellComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketDataRoutingModule { }
