import { createReducer, on } from '@ngrx/store';
import {
  previous,
  next,
  getImages,
  getImagesSucces,
  getImagesFailed,
} from './../actions/image-data.actions';
import { initialImageState } from '../image.state';

const _imagesReducer = createReducer(
  initialImageState,
  on(getImages, (state, { offset, pagesize }) => ({
    ...state,
    offset: offset,
    pagesize: pagesize,
  })),
  on(getImagesSucces, (state, { data }) => ({
    ...state,
    images: data,
  })),
  on(next, (state, { offset, pagesize }) => ({
    ...state,
    offset: offset + 1,
    pageSize: pagesize,
    // images: state.images,
  })),
  on(previous, (state, { offset, pagesize }) => ({
    ...state,
    offset: offset - 1,
    pageSize: pagesize,
    // images: state.images,
  }))
  // console.log('reducer')
);

export function imagesReducer(state: any, action: any) {
  return _imagesReducer(state, action);
}
