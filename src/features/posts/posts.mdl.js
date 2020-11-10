import { fetchInitialData, fetchPosts, fetchComments } from "./posts.actions";
import { fetchUsers } from "../users/users.actions";
import { unwrapResult } from "@reduxjs/toolkit";

export const processFetchInitialData = ({
  dispatch
}) => next => async action => {
  next(action);

  const { type } = action;

  if (type === fetchInitialData.type) {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }
};

export const processFetchPosts = ({ dispatch }) => next => async action => {
  const { type, payload } = action;

  if (type === fetchPosts.fulfilled.type) {
    const comments = await dispatch(fetchComments()).then(unwrapResult);
    const postsWithComments = payload.map(post => {
      const postComments = comments.filter(
        comment => comment.postId === post.id
      );
      return { ...post, comments: postComments };
    });
    next({ type, payload: postsWithComments });
  } else {
    next(action);
  }
};

export default [processFetchInitialData, processFetchPosts];
