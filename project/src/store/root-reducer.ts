import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app/actions';
import { userProcess } from './user/actions';
import { roomProcess } from './room/actions';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Room]: roomProcess.reducer,
});
