import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            <span className="header__favorite-count">3</span>
            {/* <span class="header__login">Sign in</span> */}
          </Link>
        </li>
        {/* only logged */}
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
        {/* only logged  */}
      </ul>
    </nav>
  );
}

type HeaderProps = {
  isHeaderNav?: boolean;
}

export default function Header({isHeaderNav = true}: HeaderProps): JSX.Element {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isHeaderNav && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}
