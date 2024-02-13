import { createAction, props } from '@ngrx/store';
import { Users } from '../user.state';

export const getUsers = createAction(
  '[current-users Component] getUsers',
  props<{ pagesize: number }>()
);
export const getUsersSucces = createAction(
  '[current-users Component] getUsersSucces',
  props<{ data: Users[] }>()
);

export const next = createAction(
  '[current-users Component] next',
  props<{ pagesize: number }>()
);

export const previous = createAction(
  '[current-users Component] previous',
  props<{ pagesize: number }>()
);
