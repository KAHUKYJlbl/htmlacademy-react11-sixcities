import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus, getUser } from '../../store/user/selectors';
import { logout } from '../../store/user/api-actions';


export default function HeaderNav(): JSX.Element {
  const isLogged = useAppSelector(getAuthStatus) === AuthorizationStatus.Auth;
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isLogged ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              isLogged
                ? (
                  <>
                    <span className="header__user-name user__name">{user?.email}</span>
                    <span className="header__favorite-count">{user?.id}</span>
                  </>)
                : (
                  <span className="header__login">Sign in</span>)
            }
          </Link>
        </li>
        {
          isLogged &&
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
