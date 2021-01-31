import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientShellComponent } from './client-shell/client-shell.component';
import { ReportNavComponent } from './report-nav/report-nav.component';
import { QuickPreferencesComponent } from './quick-preferences/quick-preferences.component';
import { PrimengModulesModule } from '../shared/primeng--modules/primeng--modules.module';
import { SharedModule } from '../shared/shared.module';
import { PackComponent } from './pack/pack.component';
import { ReportPacksComponent } from './report-packs/report-packs.component';
import { PackReportsComponent } from './pack-reports/pack-reports.component';
import { IndividualReportsComponent } from './individual-reports/individual-reports.component';
import { clientReducer } from './state/client.reducer';
import { ClientEffects } from './state/client.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    ClientHeaderComponent,
    ClientShellComponent,
    ReportNavComponent,
    QuickPreferencesComponent,
    PackComponent,
    ReportPacksComponent,
    PackReportsComponent,
    IndividualReportsComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('client', clientReducer),
    EffectsModule.forFeature([ClientEffects]),
    ClientRoutingModule,
    PrimengModulesModule,
    SharedModule,
  ],
})
export class ClientModule {}
