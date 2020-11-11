import { createSelector } from "@reduxjs/toolkit";
import { selectUsers } from "./users.selector";
import { selectComments, selectCommentsByPostId } from "./comments.selector";
import { POSTS } from "../actions/posts.action";

/**
 * For ease of access in the component,
 * include comments to their respective posts
 */
const mapCommentsToPosts = (posts, comments) => {
  return posts.map(post => {
    const postComments = comments.filter(comment => comment.postId === post.id);
    return { ...post, comments: postComments };
  });
};

export const selectPosts = createSelector(
  state => state.posts,
  selectComments,
  (allPosts, allComments) => {
    return mapCommentsToPosts(allPosts, allComments);
  }
);

export const selectPostById = createSelector(
  (state, { id }) => state.posts.find(post => post.id === id),
  (state, { id }) => selectCommentsByPostId(state, { postId: id }),
  (post, allCommentsByPostId) => {
    return { ...post, comments: allCommentsByPostId };
  }
);

export const selectPostsByUserId = createSelector(
  (state, { userId }) => state.posts.filter(post => post.userId === userId),
  selectComments,
  (postsByUserId, allComments) => mapCommentsToPosts(postsByUserId, allComments)
);

export const selectPostCountByUserId = createSelector(
  selectPostsByUserId,
  postsByUserId => postsByUserId.length
);

export const dataHasLoaded = createSelector(
  selectPosts,
  selectUsers,
  selectComments,
  (posts, users, comments) =>
    posts.length !== 0 && users.length !== 0 && comments.length !== 0
);

export const isFetchingPosts = createSelector(
  state => state.ui.loading.includes(POSTS),
  isFetching => isFetching
);
