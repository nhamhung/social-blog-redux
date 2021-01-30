import * as types from "../constants/friends.constants";
import api from "../../apiService";

const getFriendList = () => async (dispatch) => {
  dispatch({ type: types.GET_FRIENDLIST_REQUEST });
  api
    .get("/friends")
    .then(function (response) {
      if (response.data && response.data.data.users)
        dispatch({
          type: types.GET_FRIENDLIST_SUCCESS,
          payload: response.data.data.users,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.GET_FRIENDLIST_FAILURE, payload: error });
    });
};

const searchUser = (query) => async (dispatch) => {
  dispatch({ type: types.SEARCH_USER_REQUEST });
  api
    .get(`/users?name[$regex]=${query}&name[$options]=i`)
    .then(function (response) {
      if (response.data && response.data.data.users)
        dispatch({
          type: types.SEARCH_USER_SUCCESS,
          payload: response.data.data.users,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.SEARCH_USER_FAILURE, payload: error });
    });
};

const FriendsActions = { getFriendList, searchUser };

export default FriendsActions;
