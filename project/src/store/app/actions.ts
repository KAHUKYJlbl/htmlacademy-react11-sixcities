import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {NameSpace, SortType, Cities, FetchStatus} from '../../const';
import { Offer } from '../../types/offer/offer';
import { fetchOffers } from './api-actions';

type InitialState = {
  currentCity: Cities;
  currentSort: SortType;
  isOffersLoading: FetchStatus;
  offers: Offer[] | [];
}

const initialState: InitialState = {
  currentCity: Cities.Paris,
  currentSort: SortType.Popular,
  isOffersLoading: FetchStatus.Idle,
  offers: [],
};

export const appProcess = createSlice({
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
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isOffersLoading = FetchStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = FetchStatus.Pending;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = FetchStatus.Failed;
      });
  }
});
