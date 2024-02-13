import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as imageDataAction from './actions/image-data.actions';
import { ImageDataService } from './services/image-data.service';
import {
  mergeMap,
  switchMap,
  map,
  catchError,
  exhaustMap,
} from 'rxjs/operators';
import { Images } from './image.state';
@Injectable()
export class ImageDataEffects {
  constructor(
    private actions$: Actions,
    private _imageDataService: ImageDataService
  ) {}

  nextimageData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageDataAction.next),
      switchMap((action) =>
        this._imageDataService.getImages(action.offset, action.pagesize).pipe(
          map((data: Images[]) => {
            return imageDataAction.getImagesSucces({ data });
          })
        )
      )
    )
  );
  previousimageData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageDataAction.previous),
      switchMap((action) =>
        this._imageDataService.getImages(action.offset, action.pagesize).pipe(
          map((data: Images[]) => {
            return imageDataAction.getImagesSucces({ data });
          })
        )
      )
    )
  );
  imageData$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(imageDataAction.getImages),
      switchMap((action) =>
        this._imageDataService.getImages(action.offset, action.pagesize).pipe(
          map((data: Images[]) => {
            console.log('dddd', data);
            return imageDataAction.getImagesSucces({ data });
          }),
          catchError((error: any) => of(imageDataAction.getImagesFailed()))
        )
      )
    )
  );
}
