import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SelectItem } from 'primeng/api';
import { targetWeightOptions } from 'src/app/config/dropdown-options';
import { enterLeaveAnimation } from 'src/app/shared/animations/animations';
import { IDropdownOptions } from 'src/app/shared/interface/IDropdownOptions';
import { IPackData } from 'src/app/shared/interface/IPackData';

@Component({
  selector: 'app-pack-reports',
  templateUrl: './pack-reports.component.html',
  styleUrls: ['./pack-reports.component.scss'],
  animations: [
    enterLeaveAnimation
  ]
})
export class PackReportsComponent implements OnInit, OnChanges {
  @Input() packData: IPackData | null = null;
  selectedReports: any[] = [];
  targetWeightOptions: any[] = targetWeightOptions.value;
  reports: any = [];
  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    this.reports = changes['packData'].currentValue.reports;
  }
}
