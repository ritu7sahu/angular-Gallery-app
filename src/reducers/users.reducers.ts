import { createReducer, on } from '@ngrx/store';
import {
  previous,
  next,
  getUsers,
  getUsersSucces,
} from './../actions/users.actions';
import { initialUsersState } from '../user.state';

const _UsersReducer = createReducer(
  initialUsersState,
  on(getUsers, (state, { pagesize }) => ({
    ...state,
    pagesize: pagesize,
  })),
  on(getUsersSucces, (state, { data }) => ({
    ...state,
    users: data,
  })),
  on(next, (state, { pagesize }) => ({
    ...state,
    pageSize: pagesize + 10,
    // images: state.images,
  })),
  on(previous, (state, { pagesize }) => ({
    ...state,
    pageSize: pagesize - 10,
    // images: state.images,
  }))
  // console.log('reducer')
);

export function usersReducer(state: any, action: any) {
  return _UsersReducer(state, action);
}
