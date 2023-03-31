import classNames from 'classnames';

import { CITIES } from '../../const';

type LocationsProps = {
  activeLocation: string;
  onLocationChange: (newLocation: string) => void;
}

export default function Locations ({activeLocation, onLocationChange}: LocationsProps): JSX.Element {

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
                    onLocationChange(location);
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
