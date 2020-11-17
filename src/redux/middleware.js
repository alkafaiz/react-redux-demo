import { getDefaultMiddleware } from "@reduxjs/toolkit";
import postsMiddleware from "../features/posts/posts.mdl";
import albumMiddleware from "../features/album/album.mdl";

// concatinating javascript array
const middleware = getDefaultMiddleware().concat([
  ...postsMiddleware,
  ...albumMiddleware
]);

export default middleware;
