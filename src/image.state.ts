export interface Images {
  url: string;
  author: string;
}

export const PAGINATION_FEATURE_KEY = 'images';
export interface PaginationState {
  images: Images[];
  offset: number;
  pagesize: number;
  // loaded: boolean;
  // error?: string | null;
}

export const initialImageState: PaginationState = {
  images: [],
  offset: 1,
  pagesize: 30,
  // loaded: false,
  // error: null,
};
