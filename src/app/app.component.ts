import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { getCurrentRoute } from './state';
import { State } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'btpanorama';
  constructor(
    private primengConfig: PrimeNGConfig,
  ) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
