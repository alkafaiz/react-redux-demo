import { setLoader } from "../../actions/ui.action";
import { apiRequest, API_SUCCESS, API_ERROR } from "../../actions/api.action";
import { setNotification } from "../../actions/notification.action";
import { USERS, setUsers, FETCH_USERS } from "../../actions/users.action";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const usersMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_USERS:
      next(
        apiRequest({
          body: null,
          method: "GET",
          url: USERS_URL,
          feature: USERS
        })
      );
      next(setLoader({ state: true, feature: USERS }));
      break;

    case `${USERS} ${API_SUCCESS}`:
      next(setUsers({ users: action.payload }));
      next(setLoader({ state: false, feature: USERS }));
      break;

    case `${USERS} ${API_ERROR}`:
      next(setNotification({ message: "Server error", feature: USERS }));
      next(setLoader({ state: false, feature: USERS }));
      break;

    default:
      break;
  }
};
