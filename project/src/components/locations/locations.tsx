import { Offer } from '../../types/offer/offer';
import { useState } from 'react';
import classNames from 'classnames';

type LocationsListProps = {
  locations: Set<string>;
}

function LocationsList({locations}: LocationsListProps): JSX.Element {
  const [activeLocation, setActiveLocation] = useState('Paris');

  return (
    <ul className="locations__list tabs__list">
      {
        Array.from(locations, (location) => (
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
  );
}

type LocationsProps = {
  offers: Offer[];
}

const getLocations = (offers: Offer[]) => offers.reduce((acc, offer) => (
  acc.add(offer.city.name)
), new Set<string>());

export default function Locations ({offers}: LocationsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <LocationsList locations={getLocations(offers)} />
      </section>
    </div>
  );
}
