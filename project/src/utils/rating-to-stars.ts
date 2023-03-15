type RatingToStars = (rating: number, ratingScale: number, starsQuantity: number) => string;

export const ratingToStars: RatingToStars = (rating, ratingScale, starsQuantity) => {
  const percentPerStar = 100 / starsQuantity;
  const starsToRatingScaleRatio = starsQuantity / ratingScale;
  return `${Math.round(rating * starsToRatingScaleRatio) * percentPerStar}%`;
};
