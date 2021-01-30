import * as types from '../constants/reviews.constants';

const initialState = {
  reviews: [] /* store reviews for currently viewed blog */,
  loading: false,
  error: null,
};

const ReviewsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case types.GET_BLOG_REVIEWS_REQUEST:
      return { ...state, loading: true };
    case types.GET_BLOG_REVIEWS_SUCCESS:
      return { ...state, reviews: payload, loading: false };
    case types.GET_BLOG_REVIEWS_FAILURE:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default ReviewsReducer;
