// feature name
export const USERS = "[Users]";

// action types
export const FETCH_USERS = `${USERS} FETCH`;
export const SET_USERS = `${USERS} SET`;

// action creators
export const setUsers = ({ users }) => ({
  type: SET_USERS,
  payload: users
});

export const fetchUsers = ({ query }) => ({
  type: FETCH_USERS,
  payload: query
});
