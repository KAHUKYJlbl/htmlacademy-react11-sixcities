import { createAction } from '@reduxjs/toolkit';

import { StoredUser } from '../../types/api/login';
import { AuthorizationStatus } from '../../const';

export const setUser = createAction<StoredUser>('app/setUser');

export const setAuthStatus = createAction<AuthorizationStatus>('app/setAuthStatus');
