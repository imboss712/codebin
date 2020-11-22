import React from "react";
import { Input, Divider } from "antd";
import "./CodeInput.css";

const { TextArea } = Input;

const CodeInput = (props) => {
  const { input, changeInput } = props;

  return (
    <>
      <Divider style={{ margin: "0 auto" }} />
      <div className="heading">
        <h2>Input :</h2>
      </div>
      <TextArea
        value={input}
        style={{ resize: "none", fontSize: "16px" }}
        rows={5}
        placeholder="Code Input..."
        bordered={false}
        onChange={changeInput}
      />
      <Divider />
    </>
  );
};

export default CodeInput;
