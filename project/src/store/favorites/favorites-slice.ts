import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, FetchStatus } from '../../const';
import { fetchFavorites } from './api-actions';
import { Offer } from '../../types/offer/offer';

type InitialState = {
  favoritesLoadingStatus: FetchStatus;
  favoritesPostingStatus: FetchStatus;
  favoriteOffers: Offer[];
}

const initialState: InitialState = {
  favoritesLoadingStatus: FetchStatus.Idle,
  favoritesPostingStatus: FetchStatus.Idle,
  favoriteOffers: [],
};

export const favotitesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoritesLoadingStatus = FetchStatus.Success;
      });
  }
});
