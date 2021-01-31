import { animate, style, transition, trigger } from '@angular/animations';
import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { enterLeaveAnimation } from 'src/app/shared/animations/animations';
import { IIndividualReport } from 'src/app/shared/interface/IIndividualReport';

@Component({
  selector: 'app-individual-reports',
  templateUrl: './individual-reports.component.html',
  styleUrls: ['./individual-reports.component.scss'],
  animations: [
    enterLeaveAnimation,
    // trigger('enterLeave', [
    //   transition(':enter', [
    //     style({ transform: 'translateY(-50%)' }),
    //     animate('0.5s ease-in')
    //   ]),
    //   transition(':leave', [
    //     animate('0.3s ease-out', style({ transform: 'translateY(100%)' }))
    //   ])
    // ])
  ]
})
export class IndividualReportsComponent implements OnInit, OnChanges {
  @Input() reports: IIndividualReport[] = [];
  individualReports: IIndividualReport[] = [];

  constructor() { }

  ngOnInit(): void { }

  toggleReportContent(event: any, index: number) {
    const currentExpandedStatus = this.individualReports[index].isExpanded;
    this.individualReports = this.individualReports.map((report) => {
      let _report = { ...report };
      _report.isExpanded = false;
      return _report;
    });
    this.individualReports[index].isExpanded = !currentExpandedStatus;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.individualReports = [...changes['reports'].currentValue];
  }
}
