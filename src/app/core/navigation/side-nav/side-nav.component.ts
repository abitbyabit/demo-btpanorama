import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ISidebarConfig } from 'src/app/shared/interface/ISidebarConfig';
import { getCurrentRoute } from 'src/app/state';
import { State } from 'src/app/state/app.state';
import { sidebarConfig } from './sidebar-config';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { AppActions } from 'src/app/state/actions';
import { Router } from '@angular/router';

@AutoUnsubscribe() // auto unsubscibe
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy, AfterViewInit {
  sidebarConfig: ISidebarConfig[] = sidebarConfig;
  currentRoute: string = '';

  constructor(
    private store: Store<State>,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.store.select(getCurrentRoute).subscribe((currentRoute) => {
      this.currentRoute = currentRoute;
      this.ref.detectChanges();
    });
  }

  onNavItemClick(routeName: string) {
    this.store.dispatch(AppActions.setCurrentRoute({ route: routeName }));
    this.router.navigate(['/', routeName]);
  }
}
