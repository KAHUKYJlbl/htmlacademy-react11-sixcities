import { createReducer } from '@reduxjs/toolkit';

import { changeCurrentCity } from '../actions/change-current-city';
import { changeCurrentSort } from '../actions/change-current-sort';
import { getOffers } from '../actions/get-offers';

import { Offer } from '../../types/offer/offer';
import { CITIES, SortType } from '../../const';
import { offers } from '../../mocks/offers';

type InitialState = {
  currentCity: string;
  currentSort: SortType;
  offers: Offer[] | [];
}

const initialState: InitialState = {
  currentCity: CITIES[0],
  currentSort: SortType.Popular,
  offers: offers,
};

export const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCurrentCity,
        (state, action) => {
          state.currentCity = action.payload;
        }
      )
      .addCase(getOffers,
        (state, action) => {
          state.offers = action.payload;
        }
      )
      .addCase(changeCurrentSort,
        (state, action) => {
          state.currentSort = action.payload;
        }
      );
  }
);
