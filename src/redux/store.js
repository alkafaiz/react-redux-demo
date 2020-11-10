import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import middleware from "./middleware";

const store = configureStore({
  reducer,
  middleware
});

export default store;
