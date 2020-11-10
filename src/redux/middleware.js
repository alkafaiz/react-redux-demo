import postsMiddleware from "../features/posts/posts.mdl";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const middleware = getDefaultMiddleware().concat(postsMiddleware);

export default middleware;
