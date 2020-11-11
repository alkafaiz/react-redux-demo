import { apiMiddleware } from "./core/api.mdl";
import { postsMiddleware } from "./feature/posts.mdl";
import { usersMiddleware } from "./feature/users.mdl";
import { commentsMiddleware } from "./feature/comments.mdl";
import { notificationMiddleware } from "./feature/notification.mdl";

const featureMiddleware = [
  postsMiddleware,
  usersMiddleware,
  commentsMiddleware,
  notificationMiddleware
];

const coreMiddleware = [apiMiddleware];

export const rootMiddleware = [...featureMiddleware, ...coreMiddleware];
