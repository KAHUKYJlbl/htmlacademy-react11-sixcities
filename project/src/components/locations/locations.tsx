import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import classNames from 'classnames';

import { Cities } from '../../const';
import { changeCurrentCity } from '../../store/app/app-slice';

type LocationsProps = {
  activeLocation: Cities;
}

export default function Locations ({activeLocation}: LocationsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleLocationChange = (newLocation: Cities) => {
    dispatch(changeCurrentCity(newLocation));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(Cities).map((location) => (
              <li className="locations__item" key={location}>
                <a
                  className={classNames(
                    'locations__item-link tabs__item',
                    activeLocation === location && 'tabs__item--active'
                  )}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleLocationChange(location);
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
