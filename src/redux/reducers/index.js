import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import BlogsReducer from "./blogs.reducer";
import FriendsReducer from "./friends.reducer";

export default combineReducers({
  auth: authReducer,
  blogs: BlogsReducer,
  friends: FriendsReducer,
});
