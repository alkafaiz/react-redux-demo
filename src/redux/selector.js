import { createSelector } from "@reduxjs/toolkit";

export const selectErrorMessage = createSelector(
  state => state.users.error,
  state => state.posts.error,
  state => state.album.error,
  (userError, postError, albumError) => {
      if (userError) return userError;
      else if (postError) return postError;
      else if (albumError) return albumError;
      else return ""
  }
);
