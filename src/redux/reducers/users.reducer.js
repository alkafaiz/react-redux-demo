import { SET_USERS } from "../actions/users.action";

const initState = [];

export const usersReducer = (users = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.payload;

    default:
      return users;
  }
};
