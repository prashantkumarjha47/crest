const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user,
  notificationList: [],
  error: false,
};

export default initialState;
