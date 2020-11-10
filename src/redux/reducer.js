import { combineReducers } from "redux";
import postsReducer from "../features/posts/posts.slice";
import usersReducer from "../features/users/users.slice";

const reducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

export default reducer;
