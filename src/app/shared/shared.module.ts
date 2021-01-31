import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDateAtComponent } from './calendar-date-at/calendar-date-at.component';
import { FormsModule } from '@angular/forms';
import { PrimengModulesModule } from './primeng--modules/primeng--modules.module';



@NgModule({
  declarations: [CalendarDateAtComponent],
  exports: [CalendarDateAtComponent, FormsModule, PrimengModulesModule],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModulesModule
  ]
})
export class SharedModule { }
