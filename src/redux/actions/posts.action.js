// feature name
export const POSTS = "[Posts]";

// action types
export const FETCH_POSTS = `${POSTS} FETCH`;
export const SET_POSTS = `${POSTS} SET`;
export const FETCH_INITIAL_DATA = "FETCH INITIAL DATA";

// action creators
export const setPosts = ({ posts }) => ({
  type: SET_POSTS,
  payload: posts
});

export const fetchPosts = ({ query }) => ({
  type: FETCH_POSTS,
  payload: query
});

export const fetchInitialData = () => ({
  type: FETCH_INITIAL_DATA
});
