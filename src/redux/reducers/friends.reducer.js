import * as types from "../constants/friends.constants";

const initialState = {
  friendList: [],
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
    default:
      return state;
  }
};

export default FriendsReducer;
