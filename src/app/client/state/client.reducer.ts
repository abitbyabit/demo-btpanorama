import { createReducer, on } from '@ngrx/store';
import { IClientReport } from 'src/app/shared/interface/IClientReports';
import { IIndividualReport } from 'src/app/shared/interface/IIndividualReport';
import { IPackData } from 'src/app/shared/interface/IPackData';
import { IQuickPreference } from 'src/app/shared/interface/IQuickPreference';
import { ClientActions } from './actions';

// Client feature state.
export interface ClientState {
  quickPreferences: IQuickPreference | null;
  reports: IClientReport | null;
  error: string;
  isLoading: boolean;
  currentPackReports: IPackData | null;
}

const initialState: ClientState = {
  quickPreferences: {
    monthsFrom: '24M',
    atDate: '01 jan 2021',
    toDate: '02 feb 2021',
    exportType: 'pdf',
  },
  reports: null,
  error: '',
  isLoading: false,
  currentPackReports: null,
};

export const clientReducer = createReducer<ClientState>(
  initialState,
  on(
    ClientActions.getReports,
    (state, action): ClientState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    ClientActions.getReportsSuccess,
    (state, action): ClientState => {
      return {
        ...state,
        reports: { ...action.clientReports },
        currentPackReports: null,
        error: '',
        isLoading: false,
      };
    }
  ),
  on(
    ClientActions.getReportsError,
    (state, action): ClientState => {
      return {
        ...state,
        reports: null,
        error: action.error,
        currentPackReports: null,
        isLoading: false,
      };
    }
  ),
  on(
    ClientActions.setReportPreferences,
    (state, action): ClientState => {
      return {
        ...state,
        quickPreferences: { ...action.params },
      };
    }
  ),
  on(
    ClientActions.setSelectedPackReports,
    (state, action): ClientState => {
      // based on current clicked pack, reset packs selection status
      const curretnPackClicked = { ...action.packReport };
      const packReports: IPackData[] = state.reports?.packReports || [];
      const individualReports: IIndividualReport[] =
        state.reports?.individualReports || [];

      const newPackReports: IPackData[] = packReports.map((data) => {
        let pack: IPackData = { ...data };
        pack.isPackSelected = pack.isPackSelectedPrevious = false;// reset pack selected status to false
        if (pack.packId == curretnPackClicked.packId) {
          pack.isPackSelected = !curretnPackClicked.isPackSelected;
        }
        // set previous selected packed, for previous selected pack status flip  use
        if (state.currentPackReports?.packId == pack.packId) {
          pack.isPackSelectedPrevious = true;
        }
        return pack;
      });

      // reset current pack selected; if same, set new current pack null
      let newCurrentPack: IPackData | null = null;
      if (state.currentPackReports && state.currentPackReports.isPackSelected && state.currentPackReports.packId == curretnPackClicked.packId) {
        newCurrentPack = null;
      } else {
        newCurrentPack = {
          ...action.packReport,
          isPackSelected: !curretnPackClicked.isPackSelected,
          isPackSelectedPrevious: false

        }
      }
      return {
        ...state,
        reports: {
          packReports: [...newPackReports],
          individualReports: [...individualReports],
        },
        currentPackReports: newCurrentPack,
      };
    }
  )
);
