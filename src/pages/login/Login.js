import React, { useState, useEffect, useContext } from "react";
import { Context } from "store/context";

import { useHistory } from "react-router-dom";
import { login } from "store/actions";
import { routes } from "config/routes";
import "./Login.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const { state, dispatch } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (!state.error && state.user) {
      history.push(routes.explorer.path);
    }
    setShowError(state.error);
  }, [state.error, state.user, history]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    try {
      console.log(username, password);
      dispatch(login({ email: username, password }));
      setUsername("");
      setPassword("");
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <form onSubmit={onFormSubmit} className="modal-content animate">
          {showError && <p className="error-message">Login Failed!</p>}
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
