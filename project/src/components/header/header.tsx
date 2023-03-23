import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

type HeaderProps = {
  isHeaderNav?: boolean;
}

export default function Header({isHeaderNav = true}: HeaderProps): JSX.Element {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoType='header' />
          </div>
          {isHeaderNav && <HeaderNav isLogged />}
        </div>
      </div>
    </header>
  );
}
