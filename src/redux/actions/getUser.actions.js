import * as types from "../constants/getUSer.constants";
import api from "../../apiService";

const getUserData = () => async (dispatch) => {
  dispatch({ type: types.GET_USER_REQUEST });
  api
    .get("/users/me")
    .then(function (response) {
      //add condition if localStorage, dispatch
      dispatch({ type: types.GET_USER_SUCCESS });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.GET_USER_FAILURE, payload: error });
    });
};

const getUserActions = { getUserData };

export default getUserActions;
