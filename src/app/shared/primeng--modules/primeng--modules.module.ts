import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    DropdownModule,
    TableModule,
    CalendarModule
  ]
})
export class PrimengModulesModule { }
