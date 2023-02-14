import React from "react";
import { useStorageListener } from "../../hooks/useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="change-alert-bg">
        <div className="container-alert">
          <p>There were changes!</p>
          <p>There were changes in another browser window or on another device.</p>
          <button
            onClick={() => toggleShow(false)}
          >
            Reload
          </button>
        </div>
      </div>);
  } else {
    return null;
  }
}


export { ChangeAlert };