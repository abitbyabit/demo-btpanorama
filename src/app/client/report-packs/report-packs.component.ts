import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPackData } from 'src/app/shared/interface/IPackData';

@Component({
  selector: 'app-report-packs',
  templateUrl: './report-packs.component.html',
  styleUrls: ['./report-packs.component.scss'],
})
export class ReportPacksComponent implements OnInit {
  @Input() packsData: IPackData[] = [];
  @Input() currentPackSelected: IPackData | null = null;
  @Output()
  packClicked: EventEmitter<IPackData> = new EventEmitter<IPackData>();
  currentPackData?: IPackData;
  constructor() {}

  ngOnInit(): void {}

  /**
   * toggle packs selected status
   * @param packDataSelected
   */
  onPackClicked(packClicked: IPackData) {
    this.packClicked.emit(packClicked);
  }
}
