import * as CONSTANTS from "./constants";

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case CONSTANTS.SET_HISTORY:
      return {
        ...state,
        history: [payload, ...state.history],
      };
    case CONSTANTS.ERROR:
      console.log(payload);
      return {
        ...state,
        error: payload,
      };
    case CONSTANTS.SET_USER:
      return {
        ...state,
        user: payload,
      };
    case CONSTANTS.SET_NOTIFICATION:
      let { notificationList } = state;
      let data = [...new Set([...notificationList, ...payload])];
      return {
        ...state,
        notificationList: data,
      };
    case CONSTANTS.LOGOUT:
      return {
        ...state,
        user: null,
        notificationList: [],
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
