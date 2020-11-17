import { createSlice } from "@reduxjs/toolkit";
import { fetchAlbum } from "./album.action";
import { ALBUM } from "../features";

const initialState = {
  isFetching: true,
  albums: [],
  error: ""
};

const albumSlice = createSlice({
  name: ALBUM,
  initialState,
  reducers: {},
  /**
   * missing the 's'
   * ! extraReducer => extraReducers
   */
  extraReducers: {
    [fetchAlbum.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchAlbum.fulfilled]: (state, action) => {
      state.albums = action.payload;
      state.isFetching = false;
    },
    [fetchAlbum.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = "Unknown error occured!";
    }
  }
});

export default albumSlice.reducer;
