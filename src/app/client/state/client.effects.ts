import { Injectable } from '@angular/core';
import { map, catchError, concatMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClientService } from '../services/client.service';
import { ClientActions } from './actions';

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}

  getClientReports$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ClientActions.getReports),
      mergeMap((action) =>
        this.clientService.getClientReports(action.queries).pipe(
          map((clientReports) =>
            ClientActions.getReportsSuccess({ clientReports })
          ),
          catchError((error) => of(ClientActions.getReportsError({ error })))
        )
      )
    );
  });
}
