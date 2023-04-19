import { Route, Routes } from 'react-router-dom';
// import PrivateRoute from '../private-route/private-route';

import Main from '../../pages/main/main';
// import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';
import { getAuthStatus } from '../../store/user/selectors';

export default function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
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
        {/* <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites favorites={offersList} />
            </PrivateRoute>
          }
        /> */}
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
