import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/interface/IUser';

export const setCurrentUser = createAction(
    '[User] Set current user',
    props<{ user: IUser }>()
);
