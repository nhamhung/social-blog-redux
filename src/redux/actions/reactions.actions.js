import * as types from '../constants/reactions.constants';
import api from '../../apiService';
// import blogsActions from './blogs.actions';

const sendBlogReactions = (targetType, targetId, emoji) => async (dispatch) => {
  dispatch({ type: types.SEND_BLOG_REACTIONS_REQUEST });
  api
    .post('/reactions', {
      targetType,
      targetId,
      emoji,
    })
    .then((response) => {
      dispatch({
        type: types.SEND_BLOG_REACTIONS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: types.SEND_BLOG_REACTIONS_FAILURE, payload: error });
    });
};

const sendReviewReactions = (targetType, targetId, emoji) => async (
  dispatch
) => {
  dispatch({ type: types.SEND_REVIEW_REACTIONS_REQUEST });
  api
    .post('/reactions', {
      targetType,
      targetId,
      emoji,
    })
    .then((response) => {
      dispatch({
        type: types.SEND_REVIEW_REACTIONS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: types.SEND_REVIEW_REACTIONS_FAILURE, payload: error });
    });
};

const sendReactions = { sendBlogReactions, sendReviewReactions };
export default sendReactions;
