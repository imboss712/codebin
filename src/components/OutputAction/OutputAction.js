import React from "react";
import { Button, Divider } from "antd";
import "./OutputAction.css";

const OutputAction = (props) => {
  const { clearOutput } = props;

  return (
    <>
      <Divider style={{ marginTop: "0" }} />
      <div className="output-action">
        <Button onClick={clearOutput}>Clear Output</Button>
      </div>
      <Divider style={{ marginBottom: "0" }} />
    </>
  );
};

export default OutputAction;
