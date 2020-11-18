import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ALBUM } from "../features";
import axios from "axios";

const fetchAlbum = createAsyncThunk(`${ALBUM}/fetchAlbum`, async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );

  return response.data;
});

const loadAlbumPage = createAction(`${ALBUM}/loadAlbumPage`);

export { fetchAlbum, loadAlbumPage };
