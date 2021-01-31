import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-calendar-date-at',
  templateUrl: './calendar-date-at.component.html',
  styleUrls: ['./calendar-date-at.component.scss'],
})
export class CalendarDateAtComponent implements OnInit {
  @Input() atDate?: string;
  @Input() toDate?: string;
  @Input() isIconShow: boolean = true;
  @Input() isDateRange: boolean = false;

  @Output() atDateChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() toDateChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('refAtDate') refAtDate: any;
  @ViewChild('refToDate') refToDate: any;
  constructor() {}

  ngOnInit(): void {}
  calendarToggle(event: any) {
    this.refAtDate.toggle();
  }

  onSelectAtDate(event: any) {
    this.atDateChange.emit(event);
    console.log(event);
  }
  onSelectToDate(event: any) {
    this.toDateChange.emit(event);
    console.log(event);
  }
  onInputDate(event: any) {
    console.log(event);
  }
}
