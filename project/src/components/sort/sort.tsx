import classNames from 'classnames';
import { useState } from 'react';

import { changeCurrentSort } from '../../store/actions/change-current-sort';

import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';

import { SortType } from '../../const';

export default function Sort (): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const currentSort = useAppSelector((state) => state.currentSort);

  const dispatch = useAppDispatch();
  const handleSortChange = (newSort: typeof SortType[keyof typeof SortType]) => {
    dispatch(changeCurrentSort(newSort));
    setIsOpen(false);
  };

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
          Object.values(SortType).map((sortType) => (
            <li
              className={classNames('places__option', currentSort === sortType && 'places__option--active')}
              tabIndex={0}
              key={sortType}
              onClick={() => handleSortChange(sortType)}
            >
              {sortType}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
