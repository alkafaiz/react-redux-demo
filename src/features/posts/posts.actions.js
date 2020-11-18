import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { POSTS } from "../features";
import axios from "axios";

const fetchPosts = createAsyncThunk(`${POSTS}/fetchPosts`, async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
});

const fetchComments = createAsyncThunk(`${POSTS}/fetchComments`, async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return response.data;
});

const fetchInitialData = createAction(`${POSTS}/fetchInitialData`);

export { fetchPosts, fetchInitialData, fetchComments };
