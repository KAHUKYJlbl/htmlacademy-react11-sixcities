import { Link } from 'react-router-dom';

import { AppRoute, Cities } from '../../const';

export default function RandomLocation (): JSX.Element {
  const randomCity = Object.values(Cities)[Math.floor(Math.random() * Object.values(Cities).length)];
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        {/* TODO Добавить нужную сортирвку */}
        <Link className="locations__item-link" to={AppRoute.Main}>
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
}
