import { createReducer } from '@reduxjs/toolkit';

import { changeCurrentCity, changeCurrentSort } from '../actions/app-actions';
import { getOffers } from '../actions/offers-actions';
import { setIsLoading } from '../actions/app-actions';
import { setAuthStatus, setUser } from '../actions/user-actions';

import { Offer } from '../../types/offer/offer';
import { StoredUser } from '../../types/api/login';
import { AuthorizationStatus, Cities, SortType } from '../../const';

type InitialState = {
  currentCity: Cities;
  currentSort: SortType;
  isLoading: boolean;
  authStatus: AuthorizationStatus;
  offers: Offer[] | [];
  user: StoredUser | null;
}

const initialState: InitialState = {
  currentCity: Cities.Paris,
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
