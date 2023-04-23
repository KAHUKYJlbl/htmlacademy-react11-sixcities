import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { Link } from 'react-router-dom';

import { AppRoute, Cities } from '../../const';
import { changeCurrentCity } from '../../store/app/app-slice';

export default function RandomLocation (): JSX.Element {
  const dispatch = useAppDispatch();

  const randomCity = Object.values(Cities)[Math.floor(Math.random() * Object.values(Cities).length)];
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item" onClick={() => dispatch(changeCurrentCity(randomCity))}>
        <Link className="locations__item-link" to={AppRoute.Main}>
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
}
