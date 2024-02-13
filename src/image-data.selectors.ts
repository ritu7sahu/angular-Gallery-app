import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { Images, PaginationState, PAGINATION_FEATURE_KEY } from './image.state';

export const getPaginationState = createFeatureSelector<PaginationState>(
  PAGINATION_FEATURE_KEY
);

export const getImages = createSelector(
  getPaginationState,
  (state: PaginationState) => state.images
);
export const getOffset = createSelector(
  getPaginationState,
  (state: PaginationState) => state.offset
);
export const getPagesize = createSelector(
  getPaginationState,
  (state: PaginationState) => state.pagesize
);
