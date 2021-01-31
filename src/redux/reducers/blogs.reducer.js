import * as types from "../constants/blogs.constants";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BLOGS_DATA_REQUEST:
      return { ...state, loading: true };
    case types.GET_BLOGS_DATA_SUCCESS:
      return { ...state, blogs: payload, loading: false };
    case types.GET_BLOGS_DATA_FAILURE:
      return { ...state, error: payload, loading: false };
    case types.WRITE_BLOG_REQUEST:
      return { ...state, loading: true };
    case types.WRITE_BLOG_SUCCESS:
      return { ...state, loading: false };
    case types.WRITE_BLOG_FAILURE:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default blogsReducer;
