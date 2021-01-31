import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPreferencesComponent } from './quick-preferences.component';

describe('QuickPreferencesComponent', () => {
  let component: QuickPreferencesComponent;
  let fixture: ComponentFixture<QuickPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
