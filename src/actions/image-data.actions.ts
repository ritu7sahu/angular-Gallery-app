import { createAction, props } from '@ngrx/store';
import { paginationState } from './../model/pagination';
import { Images } from '../image.state';

export const getImages = createAction(
  '[gallery Component] getImages',
  props<{ offset: number; pagesize: number }>()
);
export const getImagesSucces = createAction(
  '[gallery Component] getImagesSucces',
  props<{ data: Images[] }>()
);
export const getImagesFailed = createAction(
  '[gallery Component] getImagesFailed'
);
export const next = createAction(
  '[gallery Component] next',
  props<{ offset: number; pagesize: number }>()
);

export const previous = createAction(
  '[gallery Component] previous',
  props<{ offset: number; pagesize: number }>()
);
