export interface Users {
  cell: string;
  author: string;
}

export const USERS_FEATURE_KEY = 'users';
export interface UsersState {
  users: Users[];
  pagesize: number;

  // loaded: boolean;
  // error?: string | null;
}

export const initialUsersState: UsersState = {
  users: [],
  pagesize: 10,

  // loaded: false,
  // error: null,
};
