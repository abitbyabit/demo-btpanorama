import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackReportsComponent } from './pack-reports.component';

describe('PackReportsComponent', () => {
  let component: PackReportsComponent;
  let fixture: ComponentFixture<PackReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
