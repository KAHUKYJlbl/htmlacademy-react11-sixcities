import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { appSlice } from './app/app-slice';
import { userSlice } from './user/user-slice';
import { roomSlice } from './room/room-slice';
import { commentsSlice } from './comments/comments-slice';

export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Room]: roomSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
});
