import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer/offer';
import { Comment } from '../../types/offer/comment';

type AppScreenProps = {
  offers: Offer[];
  comments: Comment[];
}

export default function App({offers, comments}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {[AppRoute.Main, AppRoute.MainDefault].map((path) => (
          <Route key={path} path={path} element={
            <Main
              offers={offers}
              comments={comments}
            />
          }
          />
        ))}
        {/* <Route
          path={AppRoute.Main}
          element={
            <Main
              offers={offers}
              comments={comments}
            />
          }
        />
        <Route
          path={AppRoute.MainDefault}
          element={
            <Main
              offers={offers}
              comments={comments}
            />
          }
        /> */}
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites favorites={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Room offers={offers} />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
