import classNames from 'classnames';

import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { toggleFavoriteStatus } from '../../store/favorites/api-actions';

type FavoriteButtonProps = {
  isFavorite: boolean;
  buttonType: 'card' | 'room';
  offerId: number;
};

const favoriteButtonTypes = {
  card: {
    favoriteButtonClasses: ['place-card__bookmark-button'],
    favoriteButtonActiveClasses: ['place-card__bookmark-button--active'],
    favoriteIconClasses: ['place-card__bookmark-icon'],
    iconWidth: 18,
    iconHeight: 19,
  },
  room: {
    favoriteButtonClasses: ['property__bookmark-button'],
    favoriteButtonActiveClasses: ['property__bookmark-button--active'],
    favoriteIconClasses: ['property__bookmark-icon'],
    iconWidth: 31,
    iconHeight: 33,
  },
};

export default function FavoriteButton ({isFavorite, buttonType, offerId}: FavoriteButtonProps): JSX.Element {
  // const [favoriteState, setFavoriteState] = useState(isFavorite);
  const dispatch = useAppDispatch();

  const buttonClickHandler = () => {
    // setFavoriteState((state) => !state);
    dispatch(toggleFavoriteStatus({hotelId: offerId, status: +!isFavorite}));
  };

  return (
    <button
      className={classNames(
        'button',
        favoriteButtonTypes[buttonType].favoriteButtonClasses,
        isFavorite && favoriteButtonTypes[buttonType].favoriteButtonActiveClasses
      )}
      type="button"
      onClick={buttonClickHandler}
    >
      <svg
        className={classNames(favoriteButtonTypes[buttonType].favoriteIconClasses)}
        width={favoriteButtonTypes[buttonType].iconWidth}
        height={favoriteButtonTypes[buttonType].iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks' }</span>
    </button>
  );
}
