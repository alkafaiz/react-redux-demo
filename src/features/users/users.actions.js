import { USERS } from "../features";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(`${USERS}/fetchUsers`, async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
  }).then(res => res.json());

  return response;
});

export { fetchUsers };
