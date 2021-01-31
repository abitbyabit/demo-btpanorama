import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDateAtComponent } from './calendar-date-at.component';

describe('CalendarDateAtComponent', () => {
  let component: CalendarDateAtComponent;
  let fixture: ComponentFixture<CalendarDateAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDateAtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDateAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
