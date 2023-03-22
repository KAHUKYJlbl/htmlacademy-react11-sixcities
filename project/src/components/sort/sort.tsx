import classNames from 'classnames';
import { useState } from 'react';

const SortTypes = {
  POPULAR: 'Popular',
  LTH: 'Price: low to high',
  HTL: 'Price: high to low',
  TOP_RATED: 'Top rated first',
} as const;

export default function Sort (): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState<string>(SortTypes.POPULAR);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen((current) => !current)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', isOpen && 'places__options--opened')}>
        {
          Object.values(SortTypes).map((sortType) => (
            <li
              className={classNames('places__option', currentSort === sortType && 'places__option--active')}
              tabIndex={0}
              key={sortType}
              onClick={() => {
                setCurrentSort(sortType);
                setIsOpen(false);
              }}
            >
              {sortType}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
