import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../../const';

export const changeCurrentSort = createAction<typeof SortType[keyof typeof SortType]>('changeCurrentSort');
