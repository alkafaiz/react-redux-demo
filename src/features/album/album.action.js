import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ALBUM } from "../features";

const fetchAlbum = createAsyncThunk(`${ALBUM}/fetchAlbum`, async () => {
    console.log('fetch api done');
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
            method: "GET"
        }
    ).then(res => res.json());
    return response;
});

const loadAlbumPage = createAction(`${ALBUM}/loadAlbumPage`);

export { fetchAlbum, loadAlbumPage };