import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import { GetOffer, GetOfferById } from '../../types/offer/offer';
import { GetComment } from '../../types/offer/comment';

type AppScreenProps = {
  placesToStayTotalCount: number;
  placesToStayShownCount: number;
  getOfferById: GetOfferById;
  getOfferRandom: GetOffer;
  getCommentRandom: GetComment;
}

export default function App({placesToStayTotalCount, placesToStayShownCount, getOfferById, getOfferRandom, getCommentRandom}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              placesToStayTotalCount={placesToStayTotalCount}
              placesToStayShownCount={placesToStayShownCount}
              getOfferRandom={getOfferRandom}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
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
    </BrowserRouter>
  );
}
