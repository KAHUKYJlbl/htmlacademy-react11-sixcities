import classNames from 'classnames';
import { ratingToStars } from '../../utils/rating-to-stars';

type StarRatingProps = {
  rating: number;
  starRatingType: 'room' | 'card' | 'review';
};

const starRatingTypes = {
  room: {
    wrapperClasses: ['property__rating'],
    starClasses: ['property__stars'],
    isDigits: true,
  },
  card: {
    wrapperClasses: ['place-card__rating'],
    starClasses: ['place-card__stars'],
    isDigits: false,
  },
  review: {
    wrapperClasses: ['reviews__rating'],
    starClasses: ['reviews__stars'],
    isDigits: false,
  },
};

export default function StarRating ({rating, starRatingType}: StarRatingProps): JSX.Element {
  return (
    <div className={classNames('rating', starRatingTypes[starRatingType].wrapperClasses)}>
      <div className={classNames('rating__stars', starRatingTypes[starRatingType].starClasses)}>
        <span style={{width: ratingToStars(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {starRatingTypes[starRatingType].isDigits && <span className="property__rating-value rating__value">{rating}</span>}
    </div>
  );
}
