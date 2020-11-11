// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import middleware from "./middleware";

// const store = configureStore({
//   reducer,
//   middleware
// });

// export default store;

import { rootReducer } from "./reducer";
import { rootMiddleware } from "./middleware";
import { compose, applyMiddleware, createStore } from "redux";

let devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production") {
  devTools = a => a;
}

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...rootMiddleware), devTools)
);

export default store;
