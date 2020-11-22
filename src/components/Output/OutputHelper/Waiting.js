import React from "react";
import { Result } from "antd";

import waiting from "../../../assets/waiting.svg";

const Waiting = () => {
  return (
    <Result
      icon={<img src={waiting} alt="Waiting..." width="300" height="300" />}
      title="Waiting for some code to execute!"
    />
  );
};

export default Waiting;
