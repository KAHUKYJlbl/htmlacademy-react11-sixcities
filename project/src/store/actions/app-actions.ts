import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType } from '../../const';

export const setIsLoading = createAction<boolean>('app/setIsLoading');

export const setAuthStatus = createAction<AuthorizationStatus>('app/setAuthStatus');

export const changeCurrentCity = createAction<string>('app/changeCurrentCity');

export const changeCurrentSort = createAction<typeof SortType[keyof typeof SortType]>('app/changeCurrentSort');

