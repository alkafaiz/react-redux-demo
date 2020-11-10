import { createSelector } from "@reduxjs/toolkit";

export const selectPosts = createSelector(
  state => state.posts.posts,
  allPosts => allPosts
);

export const selectPostById = createSelector(
  (state, { id }) => state.posts.posts.find(post => post.id === id),
  allPosts => allPosts
);

export const selectPostsByUserId = createSelector(
  (state, { userId }) =>
    state.posts.posts.filter(post => post.userId === userId),
  postsByUserId => postsByUserId
);

export const selectPostCountByUserId = createSelector(
  selectPostsByUserId,
  postsByUserId => postsByUserId.length
);
