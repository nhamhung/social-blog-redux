import * as types from "../constants/login.constants";

export const loginRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_LOGIN_REQUEST });
};
