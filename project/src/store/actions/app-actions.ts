import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus, SortType } from '../../const';
import { StoredUser } from '../../types/api/login';

export const setIsLoading = createAction<boolean>('app/setIsLoading');

export const setUser = createAction<StoredUser>('app/setUser');

export const setAuthStatus = createAction<AuthorizationStatus>('app/setAuthStatus');

export const changeCurrentCity = createAction<string>('app/changeCurrentCity');

export const changeCurrentSort = createAction<typeof SortType[keyof typeof SortType]>('app/changeCurrentSort');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
