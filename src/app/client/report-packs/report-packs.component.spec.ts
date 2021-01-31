import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPacksComponent } from './report-packs.component';

describe('ReportPacksComponent', () => {
  let component: ReportPacksComponent;
  let fixture: ComponentFixture<ReportPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
