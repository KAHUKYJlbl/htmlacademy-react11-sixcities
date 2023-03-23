import dayjs from 'dayjs';
import { Comment } from '../../types/offer/comment';

import StarRating from '../star-rating/star-rating';

type ReviewItemProps = {
  comment: Comment;
};

export default function ReviewItem ({comment}: ReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <StarRating rating={comment.rating} starRatingType='review' />
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time
          className="reviews__time"
          dateTime={dayjs(comment.date).format('YYYY-MM-DDThh:mm:ssZ')}
        >
          {dayjs(comment.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}
