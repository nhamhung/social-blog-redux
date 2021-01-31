import * as types from "../constants/auth.constants";
import api from "../../apiService";

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  api
    .post("/auth/login", {
      email,
      password,
    })
    .then((response) => {
      dispatch({ type: types.LOGIN_SUCCESS });
    })
    .then((response) =>
      api
        .get("/users/me")
        .then((response) =>
          dispatch({ type: types.GET_USER_SUCCESS, payload: response.data })
        )
        .catch((error) => {
          console.log(error);
          dispatch({ type: types.GET_USER_FAILURE, payload: error });
        })
    )
    .catch((error) => {
      console.log(error);
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    });
};

const registerRequest = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  api
    .post("/users", {
      name,
      email,
      password,
    })
    .then(function (response) {
      dispatch({ type: types.REGISTER_SUCCESS });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.REGISTER_FAILURE, payload: error });
    });
};

const getUser = () => async (dispatch) => {
  dispatch({ type: types.GET_USER_REQUEST });
  api
    .get("/users/me")
    .then((response) => {
      dispatch({ type: types.GET_USER_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: types.GET_USER_FAILURE, payload: error });
    });
};

const editProfile = (name, image) => async (dispatch) => {
  dispatch({ type: types.EDIT_PROFILE_REQUEST });
  api
    .put("/users", { name, avatarUrl: image })
    .then(function (response) {
      console.log(response);
      if (response.data.success)
        dispatch({
          type: types.EDIT_PROFILE_SUCCESS,
        });
    })
    .catch(function (error) {
      dispatch({ type: types.EDIT_PROFILE_FAILURE, payload: error });
    });
};
const authActions = { loginRequest, registerRequest, getUser, editProfile };

export default authActions;
