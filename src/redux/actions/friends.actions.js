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
      console.log(response);
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

const searchFriend = (query) => async (dispatch) => {
  dispatch({ type: types.SEARCH_FRIEND_REQUEST });
  api
    .get(`/friends?name[$regex]=${query}&name[$options]=i`)
    .then(function (response) {
      console.log(response);
      if (response.data && response.data.data.users)
        dispatch({
          type: types.SEARCH_FRIEND_SUCCESS,
          payload: response.data.data.users,
        });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: types.SEARCH_FRIEND_FAILURE, payload: error });
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
          payload: { _id: id },
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
const acceptFriendRequest = (id) => async (dispatch) => {
  dispatch({ type: types.ACCEPT_FRIEND_REQUEST_REQUEST });
  api
    .post(`/friends/manage/${id}`)
    .then(function (response) {
      if (response.data.success)
        dispatch({
          type: types.ACCEPT_FRIEND_REQUEST_SUCCESS,
        });
    })
    .catch(function (error) {
      dispatch({ type: types.ACCEPT_FRIEND_REQUEST_FAILURE, payload: error });
    });
};
const deleteFriendRequest = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_FRIEND_REQUEST_REQUEST });
  api
    .delete(`/friends/manage/${id}`)
    .then(function (response) {
      if (response.data.success)
        dispatch({
          type: types.DELETE_FRIEND_REQUEST_SUCCESS,
        });
    })
    .catch(function (error) {
      dispatch({ type: types.DELETE_FRIEND_REQUEST_FAILURE, payload: error });
    });
};

const removeFriend = (id) => async (dispatch) => {
  dispatch({ type: types.REMOVE_FRIEND_REQUEST });
  api
    .delete(`/friends/${id}`)
    .then(function (response) {
      if (response.data.success)
        dispatch({
          type: types.REMOVE_FRIEND_SUCCESS,
          payload: id,
        });
    })
    .catch(function (error) {
      dispatch({ type: types.REMOVE_FRIEND_FAILURE, payload: error });
    });
};
const FriendsActions = {
  getFriendList,
  searchUser,
  searchFriend,
  sendFriendRequest,
  cancelFriendRequest,
  getFriendRequest,
  getIncomingFriendRequest,
  acceptFriendRequest,
  deleteFriendRequest,
  removeFriend,
};

export default FriendsActions;
