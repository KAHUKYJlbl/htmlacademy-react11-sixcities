import classNames from 'classnames';

type CityMapProps = {
  mapClasses: string[];
}

export default function CityMap ({mapClasses}: CityMapProps): JSX.Element {
  return (
    <section className={classNames('map', mapClasses)}></section>
  );
}
