import classNames from 'classnames';
import { useRef, useState } from 'react';


import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import useClickOutside from '../../hooks/use-click-outside/use-click-outside';

import { SortType } from '../../const';
import { getCurrentSort } from '../../store/app/selectors';
import { changeCurrentSort } from '../../store/app/actions';

export default function Sort (): JSX.Element {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(ref, () => setIsOpen(false));
  const currentSort = useAppSelector(getCurrentSort);
  const dispatch = useAppDispatch();

  const handleSortChange = (newSort: SortType) => {
    dispatch(changeCurrentSort(newSort));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get" ref={ref}>
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
