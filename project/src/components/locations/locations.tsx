import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';

import { AppRoute, CITIES } from '../../const';

type LocationsProps = {
  activeLocation: string;
}

export default function Locations ({activeLocation}: LocationsProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Array.from(CITIES, (location) => (
              <li className="locations__item" key={location}>
                {/* <a
                  className={classNames(
                    'locations__item-link tabs__item',
                    activeLocation === location && 'tabs__item--active'
                  )}
                  href={}
                  // onClick={(evt) => {
                  //   evt.preventDefault();
                  //   onLocationChange(location);
                  // }}
                >
                  <span>{location}</span>
                </a> */}
                <Link
                  className={classNames(
                    'locations__item-link tabs__item',
                    activeLocation === location && 'tabs__item--active'
                  )}
                  to={generatePath(AppRoute.Main, { city: location })}
                >
                  <span>{location}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
