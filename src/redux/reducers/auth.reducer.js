import * as types from "../constants/auth.constants";

const initialState = {
  loading: false,
  error: null,
  user: null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.GET_USER_REQUEST:
      return { ...state, loading: true };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case types.GET_USER_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.LOGOUT:
      localStorage.removeItem("token");
      return { ...state, isAuthenticated: false };
    case types.EDIT_PROFILE_REQUEST:
      return { ...state, loading: true };
    case types.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.EDIT_PROFILE_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default AuthReducer;
