import * as types from "../constants/login.constants";

const initialState = {};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default loginReducer;
