import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { IUser } from 'src/app/shared/interface/IUser';
import { UserActions } from './actions';

// User feature state
export interface UserState {
  currentUser: IUser | null;
}

const initialState: UserState = {
  // Todo: refactor it to use login user
  currentUser: {
    userID: 1,
    userName: 'test user',
    displayName: 'JY',
    userRole: 'client',
  },
};

// reducers
export const userReducer = createReducer<UserState>(
  initialState,
  on(
    UserActions.setCurrentUser,
    (state, action): UserState => {
      return {
        ...state,
        currentUser: action.user,
      };
    }
  )
);
