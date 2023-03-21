import classNames from 'classnames';
import { useState } from 'react';

type FavoriteButtonProps = {
  isFavorite: boolean;
  buttonType: 'card' | 'room';
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

export default function FavoriteButton ({isFavorite, buttonType}: FavoriteButtonProps): JSX.Element {
  const [favoriteState, setFavoriteState] = useState(isFavorite);

  return (
    <button
      className={classNames(
        'button',
        favoriteButtonTypes[buttonType].favoriteButtonClasses,
        favoriteState && favoriteButtonTypes[buttonType].favoriteButtonActiveClasses
      )}
      type="button"
      onClick={() => setFavoriteState((state) => !state)}
    >
      <svg
        className={classNames(favoriteButtonTypes[buttonType].favoriteIconClasses)}
        width={favoriteButtonTypes[buttonType].iconWidth}
        height={favoriteButtonTypes[buttonType].iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
