import * as types from "../constants/getBlogs.constants";
import api from "../../apiService";

const getBlogsData = () => async (dispatch) => {
  const query = `?page=1&limit=20&sortBy[createdAt]=1`;
  dispatch({ type: types.GET_BLOGS_DATA_REQUEST });
  api
    .get(`/blogs${query}`)
    .then(function (response) {
      if (response.data && response.data.data.blogs)
        dispatch({
          type: types.GET_BLOGS_DATA_SUCCESS,
          payload: response.data.data.blogs,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.GET_BLOGS_DATA_FAILURE, payload: error });
    });
};

const getBlogsActions = { getBlogsData };

export default getBlogsActions;
