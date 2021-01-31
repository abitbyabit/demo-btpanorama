import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDataShellComponent } from './market-data-shell.component';

describe('MarketDataShellComponent', () => {
  let component: MarketDataShellComponent;
  let fixture: ComponentFixture<MarketDataShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketDataShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDataShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
