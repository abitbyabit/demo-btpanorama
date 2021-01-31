import { createAction, props } from '@ngrx/store';
import { IClientReport } from 'src/app/shared/interface/IClientReports';
import { IPackData } from 'src/app/shared/interface/IPackData';
import { IQuickPreference } from 'src/app/shared/interface/IQuickPreference';

export const getReports = createAction(
  '[Client] Get reports',
  props<{ queries?: any }>()
);

export const getReportsSuccess = createAction(
  '[Client] Get reports success',
  props<{ clientReports: IClientReport }>()
);

export const getReportsError = createAction(
  '[Client] Get reports error',
  props<{ error: string }>()
);

export const setReportPreferences = createAction(
  '[Client] Set reports preferences',
  props<{ params: IQuickPreference }>()
);

export const setSelectedPackReports = createAction(
  '[Client] Set selected packReports',
  props<{ packReport: IPackData }>()
);
