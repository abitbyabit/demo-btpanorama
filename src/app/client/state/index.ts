import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPackData } from 'src/app/shared/interface/IPackData';
import * as AppState from '../../state/app.state';
import { ClientState } from './client.reducer';

// Extends the global app state to include the feature state.
export interface State extends AppState.State {
  clientState: ClientState;
}

// selectors
const getClientFeatureState = createFeatureSelector<ClientState>('client');

export const getClientReports = createSelector(
  getClientFeatureState,
  (state) => state.reports
);
export const getPackReports = createSelector(getClientFeatureState, (state) => {
  return state.reports?.packReports;
});

export const getIndividualReports = createSelector(
  getClientFeatureState,
  (state) => state.reports?.individualReports
);

export const getError = createSelector(
  getClientFeatureState,
  (state) => state.error
);

export const isClientLoading = createSelector(
  getClientFeatureState,
  (state) => state.isLoading
);

export const getQuickPreferences = createSelector(
  getClientFeatureState,
  (state) => state.quickPreferences
);

export const getCurrentSelectedPackReports = createSelector(
  getClientFeatureState,
  (state) => state.currentPackReports
);
