import { SET_COMMENTS } from "../actions/comments.action";

const initState = [];

export const commentsReducer = (comments = initState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.payload;

    default:
      return comments;
  }
};
