import { combineReducers } from "redux";
import postsReducer from "../features/posts/posts.slice";
import usersReducer from "../features/users/users.slice";
import albumReducer from '../features/album/album.slice';

const reducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  album: albumReducer
});

export default reducer;
