import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentsShellComponent } from './investments-shell/investments-shell.component';

const routes: Routes = [
  { path: "", component: InvestmentsShellComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentsRoutingModule { }
