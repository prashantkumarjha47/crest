import cuid from "cuid";
import * as CONSTANTS from "./constants";
import {
  setHistory,
  setError,
  setUser,
  setNotification,
  logout,
} from "./actions";
import users from "./users";
import invitationList from "./invitations";
import updatedInvitation from "./invitations_update";

const middlewareDispatch = (dispatch) => async (action) => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.SET_HISTORY:
      dispatch(setHistory(payload));
      break;
    case CONSTANTS.LOGIN:
      const authUser = users.find(
        (user) =>
          user.email === payload.email && user.password === payload.password
      );
      if (authUser) {
        localStorage.setItem("user", JSON.stringify(authUser));
        localStorage.setItem("token", cuid());
        dispatch(setUser(authUser));
        dispatch(setError(false));
      } else {
        dispatch(setError(true));
      }
      break;
    case CONSTANTS.GET_NOTIFICATION:
      const notificationList = invitationList.filter(
        (notification) => Number(notification.user_id) === payload
      );
      dispatch(setNotification(notificationList));
      break;
    case CONSTANTS.GET_UPDATED_NOTIFICATION:
      const newNotificationList = updatedInvitation.filter(
        (notification) => Number(notification.user_id) === payload
      );
      dispatch(setNotification(newNotificationList));
      break;
    case CONSTANTS.LOGOUT:
      localStorage.clear();
      dispatch(logout());
      break;
    default:
      dispatch(action);
      break;
  }
};

export default middlewareDispatch;
