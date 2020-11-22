import React from "react";
import { Result, Spin } from "antd";

import loading from "../../../assets/loading.svg";

const Compiling = () => {
  return (
    <Result
      icon={<img src={loading} alt="Compiling..." width="300" height="300" />}
      title={
        <div>
          Compiling... <Spin />
        </div>
      }
    />
  );
};

export default Compiling;
