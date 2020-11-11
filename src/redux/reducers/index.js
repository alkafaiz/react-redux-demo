import { combineReducers } from "redux";
import { postsReducer } from "./posts.reducer";
import { uiReducer } from "./ui.reducer";
import { notificationReducer } from "./notification.reducer";
import { commentsReducer } from "./comments.reducer";
import { usersReducer } from "./users.reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
  notification: notificationReducer,
  ui: uiReducer
});

export { rootReducer };
