import {
  FETCH_POSTS,
  POSTS,
  setPosts,
  FETCH_INITIAL_DATA,
  fetchPosts
} from "../../actions/posts.action";
import { setLoader } from "../../actions/ui.action";
import { apiRequest, API_SUCCESS, API_ERROR } from "../../actions/api.action";
import { setNotification } from "../../actions/notification.action";
import { fetchUsers } from "../../actions/users.action";
import { fetchComments } from "../../actions/comments.action";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const postsMiddleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_INITIAL_DATA:
      dispatch(fetchPosts({ query: null }));
      dispatch(fetchUsers({ query: null }));
      dispatch(fetchComments({ query: null }));
      break;

    case FETCH_POSTS:
      next(
        apiRequest({
          body: null,
          method: "GET",
          url: POSTS_URL,
          feature: POSTS
        })
      );
      next(setLoader({ state: true, feature: POSTS }));
      break;

    case `${POSTS} ${API_SUCCESS}`:
      next(setPosts({ posts: action.payload }));
      next(setLoader({ state: false, feature: POSTS }));
      break;

    case `${POSTS} ${API_ERROR}`:
      next(setNotification({ message: "Server error", feature: POSTS }));
      next(setLoader({ state: false, feature: POSTS }));
      break;

    default:
      break;
  }
};
