import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';
import { postNewComment } from '../../store/comments/api-actions';
import { isCommentPostingSucceed, isCommentsLoading } from '../../store/comments/selectors';

const Rating: {[rating: string]: string} = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
} as const;

type RatingStarProps = {
  currentRating: string;
  starRating: string;
  changeHandler: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function RatingStar({currentRating, starRating, changeHandler}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={starRating}
        id={`${starRating}-stars`}
        type="radio"
        checked={currentRating === starRating}
        onChange={changeHandler}
      />
      <label
        htmlFor={`${starRating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={Rating[starRating]}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type NewCommentFormProps = {
  offerId: string;
}

export default function NewCommentForm ({offerId}: NewCommentFormProps): JSX.Element {
  const isLoading = useAppSelector(isCommentsLoading);
  const isCommentPosted = useAppSelector(isCommentPostingSucceed);

  const dispatch = useAppDispatch();

  const [newComment, setNewComment] = useState({
    rating: '',
    review: '',
  });

  useEffect(() => {
    if (isCommentPosted) {
      setNewComment({
        rating: '',
        review: '',
      });
    }
  }, [isCommentPosted]);

  const handleCommentChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewComment({
      ...newComment,
      [evt.target.name]: evt.target.value
    });
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postNewComment({id: offerId, comment: newComment.review, rating: +newComment.rating}));

    // if (newCommentStatus === FetchStatus.Success) {
    //   setNewComment({
    //     rating: '',
    //     review: '',
    //   });
    // }
  };

  // flex-direction: reverse
  const ratings = Object.keys(Rating).reverse();

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <fieldset disabled={isLoading}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratings.map((rating) => (
            <RatingStar
              key={rating}
              currentRating={newComment.rating}
              starRating={rating}
              changeHandler={handleCommentChange}
            />
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={newComment.review}
          onChange={handleCommentChange}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span>
            and describe your stay with at least{' '}
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}
