import { combineReducers } from "redux";

// REDUCERS
import posts from "./posts";
import post from "./post";

const rootReducer = combineReducers({
  posts,
  post,
});

export default rootReducer;
