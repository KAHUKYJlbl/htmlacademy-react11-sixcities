import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

type AppScreenProps = {
  placesToStayTotalCount: number;
  placesToStayShownCount: number;
}

export default function App({placesToStayTotalCount, placesToStayShownCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesToStayTotalCount={placesToStayTotalCount} placesToStayShownCount={placesToStayShownCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites />}
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
