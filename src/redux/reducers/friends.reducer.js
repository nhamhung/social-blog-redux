import * as types from "../constants/friends.constants";

const initialState = {
  friendList: [],
  userSearched: [],
  pendingFriendRequest: [],
  loading: false,
  error: null,
};

const FriendsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_FRIENDLIST_REQUEST:
      return { ...state, loading: true };
    case types.GET_FRIENDLIST_SUCCESS:
      return { ...state, friendList: payload, loading: false };
    case types.GET_FRIENDLIST_FAILURE:
      return { ...state, error: payload, loading: false };
    case types.SEARCH_USER_REQUEST:
      return { ...state, loading: true };
    case types.SEARCH_USER_SUCCESS:
      return { ...state, userSearched: payload, loading: false };
    case types.SEARCH_USER_FAILURE:
      return { ...state, error: payload, loading: false };
    case types.GET_FRIEND_REQUEST_REQUEST:
      return { ...state, loading: true };
    case types.GET_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        pendingFriendRequest: [...state.pendingFriendRequest, ...payload],
      };
    case types.GET_FRIEND_REQUEST_FAILURE:
      return { ...state, error: payload, loading: false };
    case types.SEND_FRIEND_REQUEST_REQUEST:
      return { ...state, loading: true };
    case types.SEND_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        // pendingFriendRequest: [...state.pendingFriendRequest, payload],
      };
    case types.SEND_FRIEND_REQUEST_FAILURE:
      return { ...state, error: payload, loading: false };
    case types.CANCEL_FRIEND_REQUEST_REQUEST:
      return { ...state, loading: true };
    case types.CANCEL_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        // pendingFriendRequest: state.pendingFriendRequest.filter(
        //   (id) => id._id !== payload
        // ),
      };
    case types.CANCEL_FRIEND_REQUEST_FAILURE:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default FriendsReducer;
