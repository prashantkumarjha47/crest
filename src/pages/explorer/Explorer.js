import React, { useContext, useEffect } from "react";
import { Context } from "store/context";
import { getDate } from "utils/formatter";
import { getNotification, getUpdatedNotification } from "store/actions";
import Header from "components/header/Header";
import "./Explorer.scss";

const TIMER = 5000;

export default function Explorer() {
  const {
    state: { notificationList, user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    const getData = () => {
      dispatch(getNotification(user?.user_id));
    };
    getData();
    setTimeout(() => {
      setInterval(() => {
        getNewNotification();
      }, TIMER);
    }, TIMER);
  }, []);

  const getNewNotification = () => {
    dispatch(getUpdatedNotification(user?.user_id));
  };

  return (
    <div className="main">
      <Header />
      <div className="container">
        <div className="main-inner">
          <div className="search-row">
            <h3>Notifications</h3>
          </div>
          <div className="history-list">
            <table>
              <thead>
                <tr>
                  <th>Received at</th>
                  <th>ID</th>
                  <th>Vector</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {notificationList.map(
                  ({ status, invite_time, invite_id, sig_id, vector }) => (
                    <tr key={invite_id}>
                      <td>{getDate(invite_time)}</td>
                      <td>{sig_id}</td>
                      <td>{vector}</td>
                      <td>{status}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
