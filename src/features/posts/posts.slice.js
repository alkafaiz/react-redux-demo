import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./posts.actions";
import { POSTS } from "../features";

const initialState = {
  isFetching: true,
  hasLoaded: false,
  posts: [],
  error: ""
};

const postsSlice = createSlice({
  name: POSTS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.hasLoaded = true;
      state.isFetching = false;
      state.error = "";
    },
    [fetchPosts.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = "unknown error occured";
    }
  }
});

export default postsSlice.reducer;
