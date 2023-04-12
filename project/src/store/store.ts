import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducers/reducer';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';

export const axios = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios,
      },
    }).concat(redirect),
});
