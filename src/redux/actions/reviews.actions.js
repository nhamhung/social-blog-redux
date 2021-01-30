import * as types from '../constants/blogs.constants';
import api from '../../apiService';

const getReviews = (id) => async (dispatch) => {
  const query = `?page=1&limit=10`;
  dispatch({ type: types.GET_BLOG_REVIEWS_REQUEST });
  api
    .get(`/reviews/blogs/${id}?${query}`)
    .then(function (response) {
      console.log('reviews', response.data);
      if (response.data && response.data.data.reviews) {
        dispatch({
          type: types.GET_BLOG_REVIEWS_SUCCESS,
          payload: response.data.data.reviews,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch({
        type: types.GET_BLOG_REVIEWS_FAILURE,
        payload: error,
      });
    });
};

const postReviews = (id, content) => async (dispatch) => {
  dispatch({ type: types.POST_BLOG_REVIEW_REQUEST });
  api
    .post(`/reviews/blogs/${id}`, {
      content,
    })
    .then((response) => {
      if (response.data) {
        dispatch({
          type: types.POST_BLOG_REVIEW_SUCCESS,
          payload: response.data.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: types.POST_BLOG_REVIEW_FAILURE, payload: error });
    });
};

const reviewActions = { getReviews, postReviews };

export default reviewActions;
