import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Store } from '@ngrx/store';
import {
  getCurrentSelectedPackReports,
  getIndividualReports,
  getPackReports,
  getQuickPreferences,
  State,
} from '../state';
import { ClientActions } from '../state/actions';
import { IPackData } from 'src/app/shared/interface/IPackData';
import { Observable, of } from 'rxjs';
import { IIndividualReport } from 'src/app/shared/interface/IIndividualReport';
import { AppActions } from 'src/app/state/actions';
import { IQuickPreference } from 'src/app/shared/interface/IQuickPreference';
import { setSelectedPackReports } from '../state/actions/client.actions';

@AutoUnsubscribe() // auto unsubscibe
@Component({
  selector: 'app-client-shell',
  templateUrl: './client-shell.component.html',
  styleUrls: ['./client-shell.component.scss'],
})
export class ClientShellComponent implements OnInit, OnDestroy {
  packReports$: Observable<IPackData[] | undefined> = of([]);
  individualReports$: Observable<IIndividualReport[] | undefined> = of([]);
  quickPreferences$: Observable<IQuickPreference | null> = of(null);
  currentPackSelected$: Observable<IPackData | null> = of(null);
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(ClientActions.getReports({}));
    this.packReports$ = this.store.select(getPackReports);
    this.individualReports$ = this.store.select(getIndividualReports);
    this.quickPreferences$ = this.store.select(getQuickPreferences);
    this.currentPackSelected$ = this.store.select(
      getCurrentSelectedPackReports
    );
    this.individualReports$.subscribe((data) => console.log('data', data));

    this.store.dispatch(AppActions.setCurrentRoute({ route: 'client' }));
  }
  ngOnDestroy() {
    //this method must be implemented for auto unsubsciber purpose use
  }
  onPackClicked(packClicked: IPackData) {
    this.store.dispatch(
      ClientActions.setSelectedPackReports({ packReport: packClicked })
    );
  }
}
