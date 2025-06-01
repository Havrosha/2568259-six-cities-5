import React from "react";

import {Review} from "../types";
import {formatReviewDate, getRatingStars} from "../../utils";

type Props = {
  review: Review;
}

const ReviewsItem: React.FunctionComponent<Props> = (props: Props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingStars(review.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time">
          {formatReviewDate(review.date)}
        </time>
      </div>
    </li>
  );
};

export default ReviewsItem;
