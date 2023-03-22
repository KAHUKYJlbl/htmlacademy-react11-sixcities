import { useState } from 'react';
import classNames from 'classnames';

import { Offer } from '../../types/offer/offer';

import { CITIES } from '../../const';

type LocationsProps = {
  offers: Offer[];
}

export default function Locations ({offers}: LocationsProps): JSX.Element {
  const [activeLocation, setActiveLocation] = useState(CITIES[0]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Array.from(CITIES, (location) => (
              <li className="locations__item" key={location}>
                <a
                  className={classNames(
                    'locations__item-link tabs__item',
                    activeLocation === location && 'tabs__item--active'
                  )}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setActiveLocation(location);
                  }}
                >
                  <span>{location}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
