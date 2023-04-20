import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const';
import { StoredUser } from '../../types/api/login';
import { State } from '../../types/state/state';

export const getUser = (state: State): StoredUser | null => state[NameSpace.User].user;

export const getUserLoadingStatus = (state: State): FetchStatus => state[NameSpace.User].isUserLoading;

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authStatus;
