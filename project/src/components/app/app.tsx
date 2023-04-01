import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';

import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';

import { Offer } from '../../types/offer/offer';
import { Comment } from '../../types/offer/comment';

import { getOffers } from '../../store/actions/get-offers';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';

type AppScreenProps = {
  offers: Offer[];
  comments: Comment[];
}

export default function App({offers, comments}: AppScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(getOffers(offers));

  const offersList = useAppSelector((state) => state.offers);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              offers={offersList}
              comments={comments}
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites favorites={offersList} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Room offers={offersList} />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
