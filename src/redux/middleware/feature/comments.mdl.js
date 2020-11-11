import { setLoader } from "../../actions/ui.action";
import { apiRequest, API_SUCCESS, API_ERROR } from "../../actions/api.action";
import { setNotification } from "../../actions/notification.action";
import {
  COMMENTS,
  setComments,
  FETCH_COMMENTS
} from "../../actions/comments.action";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

export const commentsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_COMMENTS:
      next(
        apiRequest({
          body: null,
          method: "GET",
          url: COMMENTS_URL,
          feature: COMMENTS
        })
      );
      next(setLoader({ state: true, feature: COMMENTS }));
      break;

    case `${COMMENTS} ${API_SUCCESS}`:
      next(setComments({ comments: action.payload }));
      next(setLoader({ state: false, feature: COMMENTS }));
      break;

    case `${COMMENTS} ${API_ERROR}`:
      next(setNotification({ message: "Server error", feature: COMMENTS }));
      next(setLoader({ state: false, feature: COMMENTS }));
      break;

    default:
      break;
  }
};
