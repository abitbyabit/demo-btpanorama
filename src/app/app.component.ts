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
  // currentRoute: string = '';
  // currentRoute$: Observable<string> = of('');
  constructor(
    private primengConfig: PrimeNGConfig,
    // private store: Store<State>
  ) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
    // this.currentRoute$ = this.store.select(getCurrentRoute);
    // .subscribe((currentRoute) => (this.currentRoute = currentRoute));
  }
}
