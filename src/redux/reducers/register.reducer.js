import * as types from "../constants/register.constants";

const initialState = { loading: false, error: null };

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default registerReducer;
