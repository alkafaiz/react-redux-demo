import {
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION
} from "../actions/notification.action";

const initState = [];

export const notificationReducer = (notifications = initState, action) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION):
      return [...notifications, action.payload];

    case action.type.includes(REMOVE_NOTIFICATION):
      return notifications.filter(
        notification => notification.id !== action.payload
      );

    default:
      return notifications;
  }
};
