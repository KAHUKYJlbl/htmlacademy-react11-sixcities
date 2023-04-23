import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { lazy } from 'react';

import Main from '../../pages/main/main';

import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';
import { getAuthStatus } from '../../store/user/selectors';

const Favorites = lazy(() => import('../../pages/favorites/favorites'));
const Login = lazy(() => import('../../pages/login/login'));
const Room = lazy(() => import('../../pages/room/room'));
const NotFound = lazy(() => import('../../pages/not-found/not-found'));

export default function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus.unknown) {
    return <LoadingSpinner spinnerType='page' />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Room />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}
