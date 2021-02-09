import { combineReducers } from "redux";

// REDUCERS
import posts from "./posts";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
