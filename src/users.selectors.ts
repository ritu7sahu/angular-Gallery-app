import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { Users, UsersState, USERS_FEATURE_KEY } from './user.state';

export const getUsersState =
  createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

export const getUsersData = createSelector(
  getUsersState,
  (state: UsersState) => state.users
);
export const getPagesize = createSelector(
  getUsersState,
  (state: UsersState) => state.pagesize
);
