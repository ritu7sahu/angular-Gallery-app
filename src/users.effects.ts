import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as usersAction from './actions/users.actions';
import { UsersService } from './services/users.service';
import {
  mergeMap,
  switchMap,
  map,
  catchError,
  exhaustMap,
} from 'rxjs/operators';
import { Users } from './user.state';
@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private _userService: UsersService) {}

  usersData$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(usersAction.getUsers),
      switchMap((action) =>
        this._userService.getUsers(action.pagesize).pipe(
          map((data: Users[]) => {
            console.log(data);

            return usersAction.getUsersSucces({ data });
          })
          // catchError((error: any) => {
          //   console.log(error);
          // })
        )
      )
    )
  );

  usersnextData$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(usersAction.next),
      switchMap((action) =>
        this._userService.getUsers(action.pagesize).pipe(
          map((data: Users[]) => {
            console.log(data);

            return usersAction.getUsersSucces({ data });
          })
        )
      )
    )
  );

  userspreviousData$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(usersAction.previous),
      switchMap((action) =>
        this._userService.getUsers(action.pagesize).pipe(
          map((data: Users[]) => {
            console.log(data);

            return usersAction.getUsersSucces({ data });
          })
        )
      )
    )
  );
}
