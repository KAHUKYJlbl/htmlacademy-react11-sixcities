import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import classNames from 'classnames';

const LogoTypes = {
  header: {
    classes: ['header__logo-link', 'header__logo-link--active'],
    width: 81,
    height: 41,
  },
  footer: {
    classes: ['footer__logo-link'],
    width: 64,
    height: 33
  }
};

type LogoProps = {
  logoType: 'header' | 'footer';
}

export default function Logo({logoType}: LogoProps): JSX.Element {
  return (
    <Link
      className={classNames(LogoTypes[logoType].classes)}
      to={AppRoute.Main}
    >
      <img
        className="header__logo"
        src="htmlacademy-react11-sixcities/img/logo.svg"
        alt="6 cities logo"
        width={LogoTypes[logoType].width}
        height={LogoTypes[logoType].height}
      />
    </Link>
  );
}
