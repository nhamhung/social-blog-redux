import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";
import blogsReducer from "./blogs.reducer";

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  blogs: blogsReducer,
});
