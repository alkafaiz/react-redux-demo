import { fetchInitialData, fetchPosts, fetchComments } from "./posts.actions";
import { fetchUsers } from "../users/users.actions";
import { unwrapResult } from "@reduxjs/toolkit";

export const processFetchInitialData = ({ dispatch }) => next => async action => {
  /**
   * ! next function continues the action
   * it will continue whatever action is dispatched
   * example: getLastPost action is dispatched, then it will just continue the action
   */
  next(action);

  const { type } = action;

  /**
   * ! here is the processing for this middleware
   * this middleware cares for fetchInitialData action, therefore
   * it checks for the action type that is being passed thru this middleware
   *
   * if the type matches, then do something,
   * otherwise dont do anything
   */
  if (type === fetchInitialData.type) {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }
};

export const processFetchPosts = ({ dispatch }) => next => async action => {
  const { type, payload } = action;

  /**
   * here, it checks for the type first
   */
  if (type === fetchPosts.fulfilled.type) {
    const comments = await dispatch(fetchComments()).then(unwrapResult);

    /**
     * merge comments with posts
     */
    const postsWithComments = payload.map(post => {
      const postComments = comments.filter(
        comment => comment.postId === post.id
      );
      return { ...post, comments: postComments };
    });

    /**
     * why it needs to check the type beforehand?
     * because this middleware wants to modify the payload of fetchPosts action
     *
     * the flow is like this:
     * 1. get posts data from fetchPosts/fulfilled action
     * 2. fetch comments data
     * 3. merge comments with posts data
     * 4. continue the action with modified payload
     *
     * this pattern is known as enrich pattern
     */
    next({ type, payload: postsWithComments });
  } else {
    /**
     * if the coming action is not the action this middleware is targeting at,
     * then just continue the action and this middleware doesnt do anything
     */
    next(action);
  }
};

const postsMiddleware = [processFetchInitialData, processFetchPosts];

export default postsMiddleware;
