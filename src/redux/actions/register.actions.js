import * as types from "../constants/register.constants";
import api from "../../apiService";

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

const registerActions = { registerRequest };

export default registerActions;
