import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";
import BlogsReducer from "./blogs.reducer";

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  blogs: BlogsReducer,
});
