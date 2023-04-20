import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { appProcess } from './app/actions';
import { userProcess } from './user/actions';
import { roomSlice } from './room/room-slice';
import { commentsSlice } from './comments/comments-slice';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Room]: roomSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
});
