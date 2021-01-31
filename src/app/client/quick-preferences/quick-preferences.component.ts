import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { daysFromFilters__quickRefereces } from 'src/app/config/dropdown-options';
import { IQuickPreference } from 'src/app/shared/interface/IQuickPreference';

@Component({
  selector: 'app-quick-preferences',
  templateUrl: './quick-preferences.component.html',
  styleUrls: ['./quick-preferences.component.scss'],
})
export class QuickPreferencesComponent implements OnInit {
  @Input() quickPreferences?: IQuickPreference;
  @Input() toDate?: string = '11 dec 2021';
  @Input() atDate?: string = '21 AUG 2021';
  @Input() monthsFrom?: SelectItem;
  daysFrom: any[] = [];
  constructor() {
    this.daysFrom = daysFromFilters__quickRefereces.value;
  }

  ngOnInit(): void {}
}
