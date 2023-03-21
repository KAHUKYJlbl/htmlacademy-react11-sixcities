import classNames from 'classnames';

type FavoriteButtonProps = {
  isFavorite: boolean;
  buttonType: 'card' | 'room';
};

const favoriteButtonTypes = {
  card: {
    favoriteButtonClasses: ['place-card__bookmark-button'],
    favoriteIconClasses: ['place-card__bookmark-icon'],
    iconWidth: 18,
    iconHeight: 19,
  },
  room: {
    favoriteButtonClasses: ['property__bookmark-button'],
    favoriteIconClasses: ['property__bookmark-icon'],
    iconWidth: 31,
    iconHeight: 33,
  },
};

export default function FavoriteButton ({isFavorite, buttonType}: FavoriteButtonProps): JSX.Element {
  return (
    <button
      className={classNames(
        'button',
        favoriteButtonTypes[buttonType].favoriteButtonClasses,
        isFavorite && 'place-card__bookmark-button--active'
      )}
      type="button"
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
