import { createReducer } from '@reduxjs/toolkit';

import { changeCurrentCity, changeCurrentSort, setAuthStatus, setUser } from '../actions/app-actions';
import { getOffers } from '../actions/offers-actions';
import { setIsLoading } from '../actions/app-actions';

import { Offer } from '../../types/offer/offer';
import { AuthorizationStatus, CITIES, SortType } from '../../const';
import { StoredUser } from '../../types/api/login';

type InitialState = {
  currentCity: string;
  currentSort: SortType;
  isLoading: boolean;
  authStatus: AuthorizationStatus;
  offers: Offer[] | [];
  user: StoredUser | null;
}

const initialState: InitialState = {
  currentCity: CITIES[0],
  currentSort: SortType.Popular,
  isLoading: false,
  authStatus: AuthorizationStatus.Unknown,
  offers: [],
  user: null,
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
      )
      .addCase(setIsLoading,
        (state, action) => {
          state.isLoading = action.payload;
        }
      )
      .addCase(setAuthStatus,
        (state, action) => {
          state.authStatus = action.payload;
        }
      )
      .addCase(setUser,
        (state, action) => {
          state.user = action.payload;
        }
      );
  }
);
