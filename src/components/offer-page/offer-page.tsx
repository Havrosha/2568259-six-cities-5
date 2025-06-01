import React from "react";

import {CardType, MapType} from "../const";
import {Offer, Review} from "../types";
import {capitalize, getRatingStars} from "../../utils";

import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import PageHeader from "../page-header/page-header";
import ReviewForm from "../review-form/review-form";
import ReviewsList from "../reviews-list/reviews-list";

type Props = {
  offers: Offer[];
  reviews: Review[];
}

const OfferPage: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, reviews} = props;
  const offerReviews = reviews.filter((review) => review.id === offers[0].id);

  return (
    <div className="page">
      <PageHeader/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offers[0].image.map((image, i) =>
                <div
                  key={`image-${i}`}
                  className="property__image-wrapper"
                >
                  <img
                    className="property__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offers[0].isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offers[0].title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRatingStars(offers[0].rating)}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(offers[0].type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offers[0].bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offers[0].maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offers[0].price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offers[0].goods.map((good, i) =>
                    <li
                      key={`good-${i}`}
                      className="property__inside-item"
                    >
                      {good}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offers[0].host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offers[0].host.name}
                  </span>
                  {offers[0].host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offers[0].description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">
                    {offerReviews.length}
                  </span>
                </h2>
                <ReviewsList
                  reviews={offerReviews}
                />
                <ReviewForm/>
              </section>
            </div>
          </div>
          <Map
            offers={offers}
            city={offers[0].city}
            type={MapType.PROPERTY}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={offers}
                type={CardType.NEAR_PLACES}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
