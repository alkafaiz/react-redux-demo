import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS } from "../features";

const fetchPosts = createAsyncThunk(`${POSTS}/fetchPosts`, async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  }).then(res => res.json());

  return response;
});

export { fetchPosts };
