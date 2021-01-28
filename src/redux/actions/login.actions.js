import * as types from "../constants/login.constants";
import api from "../../apiService";

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  api
    .post("/auth/login", {
      email,
      password,
    })
    .then(function (response) {
      //add condition if localStorage, dispatch
      dispatch({ type: types.LOGIN_SUCCESS });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    });
};

const loginActions = { loginRequest };

export default loginActions;
