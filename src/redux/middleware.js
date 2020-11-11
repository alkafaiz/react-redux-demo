import { apiMiddleware } from "./middleware/core/api.mdl";
import { postsMiddleware } from "./middleware/feature/posts.mdl";
import { usersMiddleware } from "./middleware/feature/users.mdl";
import { commentsMiddleware } from "./middleware/feature/comments.mdl";
import { notificationMiddleware } from "./middleware/feature/notification.mdl";

const featureMiddleware = [
  postsMiddleware,
  usersMiddleware,
  commentsMiddleware,
  notificationMiddleware
];

const coreMiddleware = [apiMiddleware];

export const rootMiddleware = [...featureMiddleware, ...coreMiddleware];
