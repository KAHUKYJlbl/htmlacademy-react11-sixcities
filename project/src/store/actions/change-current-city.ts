import { createAction } from '@reduxjs/toolkit';

export const changeCurrentCity = createAction<string>('changeCurrentCity');
