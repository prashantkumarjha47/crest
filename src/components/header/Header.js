import React, { useContext } from "react";
import { Context } from "store/context";
import { logout } from "store/actions";
import { useHistory } from "react-router-dom";
import { routes } from "config/routes";

export default function Header() {
  const { dispatch } = useContext(Context);
  const history = useHistory();

  const onLogout = () => {
    dispatch(logout());
    history.push(routes.login.path);
  };
  return (
    <div className="logout" onClick={onLogout}>
      Logout
    </div>
  );
}
