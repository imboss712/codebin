import React from "react";
import { Alert } from "antd";
import "./Tip.css";

const Tip = () => {
  return (
    <div className="tip">
      <div className="alert-box">
        <Alert
          message={
            <div>
              <b>F11 : </b> Full Screen Code Editor
            </div>
          }
          type="info"
          showIcon
        />
      </div>
      <div className="alert-box">
        <Alert
          message={
            <div>
              <b>Esc or F11 : </b> Exit Full Screen Mode
            </div>
          }
          type="info"
          showIcon
        />
      </div>
      <div className="alert-box">
        <Alert
          message={
            <div>
              <b>Ctrl-Space : </b> Auto Complete
            </div>
          }
          type="info"
          showIcon
        />
      </div>
    </div>
  );
};

export default Tip;
