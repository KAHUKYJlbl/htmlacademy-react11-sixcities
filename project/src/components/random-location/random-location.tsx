import { Link } from 'react-router-dom';

import { Offer } from '../../types/offer/offer';
import { getOffersByCities } from '../../utils/offers-by-cities';
import { AppRoute } from '../../const';

type RandomLocationProps = {
  offers: Offer[];
}

export default function RandomLocation ({offers}: RandomLocationProps): JSX.Element {
  const cities = Object.keys(getOffersByCities(offers));
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
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
