import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";


// Selectors
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getUserName = createSelector(
    getUserFeatureState,
    state => state.currentUser?.userName
);

export const getUserDisplayName = createSelector(
    getUserFeatureState,
    state => state.currentUser?.displayName
);
