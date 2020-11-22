import React from "react";
import { Result } from "antd";

import error from "../../../assets/error.svg";
import empty from "../../../assets/empty.svg";
import network_error from "../../../assets/network_error.svg";

const Error = (props) => {
  const { title, subTitle, type } = props;

  let src = error;
  if (type === "error") {
    src = error;
  } else if (type === "network-error") {
    src = network_error;
  } else if (type === "empty") {
    src = empty;
  }

  return (
    <Result
      icon={<img src={src} alt="Error" width="300" height="300" />}
      title={<p style={{ color: "red" }}>{title}</p>}
      subTitle={<p style={{ color: "#006666" }}>{subTitle}</p>}
    />
  );
};

export default Error;
