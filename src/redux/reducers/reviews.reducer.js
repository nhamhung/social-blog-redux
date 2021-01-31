import * as types from '../constants/reviews.constants';

const initialState = {
  reviews: [],
  newReview: {},
  loading: false,
  sending: false,
  error: null,
};

const ReviewsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case types.GET_BLOG_REVIEWS_REQUEST:
      return { ...state, loading: true };
    case types.GET_BLOG_REVIEWS_SUCCESS:
      return { ...state, reviews: payload, loading: false };
    case types.GET_BLOG_REVIEWS_FAILURE:
      return { ...state, error: payload, loading: false };
    case types.POST_BLOG_REVIEW_REQUEST:
      return { ...state, sending: true };
    case types.POST_BLOG_REVIEW_SUCCESS:
      return { ...state, newReview: payload, sending: false };
    case types.POST_BLOG_REVIEW_FAILURE:
      return { ...state, sending: false, error: payload };
    default:
      return state;
  }
};

export default ReviewsReducer;
