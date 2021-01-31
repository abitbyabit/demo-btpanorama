import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingShellComponent } from './tracking-shell.component';

describe('TrackingShellComponent', () => {
  let component: TrackingShellComponent;
  let fixture: ComponentFixture<TrackingShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
