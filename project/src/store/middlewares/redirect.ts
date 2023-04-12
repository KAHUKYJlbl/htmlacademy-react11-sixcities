import {PayloadAction} from '@reduxjs/toolkit';
import { Middleware } from 'redux';

import browserHistory from '../../services/browser-history';
import { reducer } from '../reducers/reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
