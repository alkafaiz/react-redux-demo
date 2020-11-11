import { createSelector } from "@reduxjs/toolkit";
import { USERS } from "../actions/users.action";

export const selectUsers = createSelector(
  state => state.users,
  allUsers => allUsers
);

export const selectUserById = createSelector(
  (state, { id }) => state.users.find(user => user.id === id),
  userById => userById
);

export const isFetchingUsers = createSelector(
  state => state.ui.loading.includes(USERS),
  isFetching => isFetching
);
