import { SET_POSTS } from "../actions/posts.action";

const initState = [];

export const postsReducer = (posts = initState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload;

    default:
      return posts;
  }
};
