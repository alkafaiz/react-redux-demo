import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./users.actions";
import { USERS } from "../features";

const initialState = {
  isFetching: true,
  hasLoaded: false,
  users: [],
  error: ""
};

const usersSlice = createSlice({
  name: USERS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.hasLoaded = true;
      state.isFetching = false;
      state.error = "";
    },
    [fetchUsers.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = "unknown error occured";
    }
  }
});

export default usersSlice.reducer;
