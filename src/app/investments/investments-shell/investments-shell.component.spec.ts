import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsShellComponent } from './investments-shell.component';

describe('InvestmentsShellComponent', () => {
  let component: InvestmentsShellComponent;
  let fixture: ComponentFixture<InvestmentsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
