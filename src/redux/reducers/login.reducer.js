import * as types from "../constants/login.constants";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: localStorage.getItem("token"),
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default loginReducer;
