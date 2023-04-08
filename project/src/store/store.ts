import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducers/reducer';
import { createAPI } from '../services/api';

export const axios = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios,
      },
    }),
});
