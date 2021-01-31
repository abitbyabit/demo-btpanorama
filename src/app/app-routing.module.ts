import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "client" },
  { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
  { path: "client", loadChildren: () => import("./client/client.module").then(m => m.ClientModule) },
  { path: "tracking", loadChildren: () => import("./tracking/tracking.module").then(m => m.TrackingModule) },
  { path: "business", loadChildren: () => import("./business/business.module").then(m => m.BusinessModule) },
  { path: "investments", loadChildren: () => import("./investments/investments.module").then(m => m.InvestmentsModule) },
  { path: "marketData", loadChildren: () => import("./market-data/market-data.module").then(m => m.MarketDataModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
