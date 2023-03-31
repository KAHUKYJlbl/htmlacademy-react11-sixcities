import { createReducer } from '@reduxjs/toolkit';
import { setCurrentCity } from '../actions/set-current-city';
import { getOffers } from '../actions/get-offers';

import { CITIES } from '../../const';

import { offers } from '../../mocks/offers';

const initialState = {
  currentCity: CITIES[0],
  offers: offers,
};

export const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(setCurrentCity,
        (state, action) => {
          state.currentCity = action.payload;
        }
      )
      .addCase(getOffers,
        (state, action) => {
          state.offers = action.payload;
        }
      );
  }
);
