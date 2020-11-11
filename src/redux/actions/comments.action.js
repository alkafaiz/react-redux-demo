// feature name
export const COMMENTS = "[Comments]";

// action types
export const FETCH_COMMENTS = `${COMMENTS} FETCH`;
export const SET_COMMENTS = `${COMMENTS} SET`;

// action creators
export const setComments = ({ comments }) => ({
  type: SET_COMMENTS,
  payload: comments
});

export const fetchComments = ({ query }) => ({
  type: FETCH_COMMENTS,
  payload: query
});
