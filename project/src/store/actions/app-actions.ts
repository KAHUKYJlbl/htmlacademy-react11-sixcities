import { createAction } from '@reduxjs/toolkit';

import { AppRoute } from '../../const';

// export const setIsLoading = createAction<boolean>('app/setIsLoading');

// export const changeCurrentCity = createAction<Cities>('app/changeCurrentCity');

// export const changeCurrentSort = createAction<typeof SortType[keyof typeof SortType]>('app/changeCurrentSort');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
