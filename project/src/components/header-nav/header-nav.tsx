import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { AppRoute } from '../../const';
import { getUser, isAuth } from '../../store/user/selectors';
import { logout } from '../../store/user/api-actions';
import { getFavorites } from '../../store/favorites/selectors';


export default function HeaderNav(): JSX.Element {
  const isAuthorized = useAppSelector(isAuth);
  const user = useAppSelector(getUser);
  const favoriteOffersCount = useAppSelector(getFavorites).length;
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
              {isAuthorized &&
              <img
                className="user__avatar"
                src={user?.avatarUrl}
                width="20" height="20"
                alt="User avatar"
              />}
            </div>
            {
              isAuthorized
                ? (
                  <>
                    <span className="header__user-name user__name">{user?.email}</span>
                    <span className="header__favorite-count">{favoriteOffersCount}</span>
                  </>)
                : (
                  <span className="header__login">Sign in</span>)
            }
          </Link>
        </li>
        {
          isAuthorized &&
            <li className="header__nav-item">
              <a className="header__nav-link" href="#" onClick={handleLogoutClick}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
        }
      </ul>
    </nav>
  );
}
