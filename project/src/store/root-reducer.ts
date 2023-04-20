import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appSlice } from './app/app-slice';
import { userSlice } from './user/user-slice';
import { offersSlice } from './offers/offers-slice';

export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  // [NameSpace.Room]: roomProcess.reducer,
});
