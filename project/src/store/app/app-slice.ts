import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {NameSpace, SortType, Cities} from '../../const';

type InitialState = {
  currentCity: Cities;
  currentSort: SortType;
}

const initialState: InitialState = {
  currentCity: Cities.Paris,
  currentSort: SortType.Popular,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCurrentCity: (state, action: PayloadAction<Cities>) => {
      state.currentCity = action.payload;
    },
    changeCurrentSort: (state, action: PayloadAction<SortType>) => {
      state.currentSort = action.payload;
    },
  },
});

export const {changeCurrentCity, changeCurrentSort} = appSlice.actions;
