import * as types from "../constants/login.constants";
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
  // dispatch({ type: types.GET_USER_REQUEST });
  // api
  //   .get("/users/me")
  //   .then((response) =>
  //     dispatch({ type: types.GET_USER_SUCCESS, payload: response.data })
  //   )
  //   .catch((error) => {
  //     console.log(error);
  //     dispatch({ type: types.GET_USER_FAILURE, payload: error });
  //   });
  // const promise1 = api.post("/auth/login", {
  //   email,
  //   password,
  // });
  // const promise2 = api.get("/users/me");
  // Promise.all([promise1, promise2])
  //   .then((response) => {
  //     console.log("response", response);
  //     dispatch({ type: types.LOGIN_SUCCESS });
  //     dispatch({ type: types.GET_USER_SUCCESS, payload: response[1].data });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     dispatch({ type: types.LOGIN_FAILURE, payload: error });
  //   });
};
const loginActions = { loginRequest };

export default loginActions;
