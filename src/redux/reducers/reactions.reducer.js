import * as types from '../constants/reactions.constants';

const initialState = {
  response: {},
  sending: false,
  error: null,
};

const ReactionsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SEND_BLOG_REACTIONS_REQUEST:
      return {
        ...state,
        sending: true,
      };
    case types.SEND_BLOG_REACTIONS_SUCCESS:
      return {
        ...state,
        sending: false,
        response: payload,
      };
    case types.SEND_BLOG_REACTIONS_FAILURE:
      return {
        ...state,
        error: payload,
        sending: false,
      };
    default:
      return state;
  }
};

export default ReactionsReducer;
