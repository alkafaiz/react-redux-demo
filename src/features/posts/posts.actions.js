import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { POSTS } from "../features";

const fetchPosts = createAsyncThunk(`${POSTS}/fetchPosts`, async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  }).then(res => res.json());

  return response;
});

const fetchComments = createAsyncThunk(`${POSTS}/fetchComments`, async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      method: "GET"
    }
  ).then(res => res.json());

  return response;
});

const fetchInitialData = createAction(`${POSTS}/fetchInitialData`);

export { fetchPosts, fetchInitialData, fetchComments };
