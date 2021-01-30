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

const sendFriendRequest = (id) => async (dispatch) => {
  dispatch({ type: types.SEND_FRIEND_REQUEST_REQUEST });
  api
    .post(`/friends/add/${id}`)
    .then(function (response) {
      if (response.data.success)
        dispatch({
          type: types.SEND_FRIEND_REQUEST_SUCCESS,
          payload: id,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.SEND_FRIEND_REQUEST_FAILURE, payload: error });
    });
};

const cancelFriendRequest = (id) => async (dispatch) => {
  dispatch({ type: types.CANCEL_FRIEND_REQUEST_REQUEST });
  api
    .delete(`/friends/add/${id}`)
    .then(function (response) {
      if (response.data.success)
        dispatch({
          type: types.CANCEL_FRIEND_REQUEST_SUCCESS,
          payload: id,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.CANCEL_FRIEND_REQUEST_FAILURE, payload: error });
    });
};
const getFriendRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_FRIEND_REQUEST_REQUEST });
  api
    .get(`/friends/add`)
    .then(function (response) {
      if (response.data.data.users)
        dispatch({
          type: types.GET_FRIEND_REQUEST_SUCCESS,
          payload: response.data.data.users,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.GET_FRIEND_REQUEST_FAILURE, payload: error });
    });
};

const getIncomingFriendRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_INC_FRIEND_REQUEST_REQUEST });
  api
    .get(`/friends/manage`)
    .then(function (response) {
      if (response.data.data.users)
        dispatch({
          type: types.GET_INC_FRIEND_REQUEST_SUCCESS,
          payload: response.data.data.users,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.GET_INC_FRIEND_REQUEST_FAILURE, payload: error });
    });
};

const FriendsActions = {
  getFriendList,
  searchUser,
  sendFriendRequest,
  cancelFriendRequest,
  getFriendRequest,
  getIncomingFriendRequest,
};

export default FriendsActions;
