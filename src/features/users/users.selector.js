import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = createSelector(
  state => state.users.users,
  allUsers => allUsers
);

export const selectUserById = createSelector(
  (state, { id }) => state.users.users.find(user => user.id === id),
  userById => userById
);
