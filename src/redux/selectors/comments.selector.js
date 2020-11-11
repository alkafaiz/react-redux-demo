import { createSelector } from "@reduxjs/toolkit";

export const selectComments = createSelector(
  state => state.comments,
  allComments => allComments
);

export const selectCommentsByPostId = createSelector(
  (state, { postId }) =>
    state.comments.filter(comment => comment.postId === postId),
  commentsByPostId => commentsByPostId
);
