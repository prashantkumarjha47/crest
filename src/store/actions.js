import * as CONSTANTS from "./constants";

export const setHistory = (address) => ({
  type: CONSTANTS.SET_HISTORY,
  payload: address,
});

export const login = (cred) => ({
  type: CONSTANTS.LOGIN,
  payload: cred,
});

export const setUser = (user) => ({
  type: CONSTANTS.SET_USER,
  payload: user,
});

export const setError = (isError) => ({
  type: CONSTANTS.ERROR,
  payload: isError,
});

export const getNotification = (userId) => ({
  type: CONSTANTS.GET_NOTIFICATION,
  payload: userId,
});

export const setNotification = (notifications) => ({
  type: CONSTANTS.SET_NOTIFICATION,
  payload: notifications,
});

export const getUpdatedNotification = (userId) => ({
  type: CONSTANTS.GET_UPDATED_NOTIFICATION,
  payload: userId,
});

export const logout = () => ({
  type: CONSTANTS.LOGOUT,
});
