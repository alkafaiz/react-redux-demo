// import { combineReducers } from "redux";
// import postsReducer from "../features/posts/posts.slice";
// import usersReducer from "../features/users/users.slice";

// const reducer = combineReducers({
//   posts: postsReducer,
//   users: usersReducer
// });

// export default reducer;

import { combineReducers } from "redux";
import { postsReducer } from "./reducers/posts.reducer";
import { uiReducer } from "./reducers/ui.reducer";
import { notificationReducer } from "./reducers/notification.reducer";
import { commentsReducer } from "./reducers/comments.reducer";
import { usersReducer } from "./reducers/users.reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
  notification: notificationReducer,
  ui: uiReducer
});

export { rootReducer };
