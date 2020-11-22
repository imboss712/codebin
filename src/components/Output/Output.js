import React from "react";
import { Divider } from "antd";

import Waiting from "./OutputHelper/Waiting";
import Compiling from "./OutputHelper/Compiling";
import Error from "./OutputHelper/Error";
import Success from "./OutputHelper/Success";
import "./Output.css";

const CodeOutput = (props) => {
  const { result, error, loading } = props;

  let output = <Waiting />;

  if (loading) {
    output = <Compiling />;
  } else if (error && error.title) {
    output = (
      <Error
        title={<p style={{ color: "red" }}>{error.title}</p>}
        subTitle={<p style={{ color: "#006666" }}>{error.subTitle}</p>}
        type="network-error"
      />
    );
  } else if (result && result.error) {
    output = (
      <Error
        title={
          <p style={{ color: "red" }}>
            {result.statusCode} - {result.error}
          </p>
        }
        type="error"
      />
    );
  } else if (result && result.output === null) {
    output = (
      <Error
        title={<p style={{ color: "red" }}>No Output</p>}
        subTitle={
          <p style={{ color: "#006666" }}>
            Please type some code and run again.
          </p>
        }
        type="empty"
      />
    );
  } else if (result && result.output !== null) {
    output = (
      <Success
        output={result.output}
        cpuTime={result.cpuTime}
        memory={result.memory}
      />
    );
  }

  return (
    <>
      <div className="heading">
        <h2>Output :</h2>
      </div>
      <div className="code-output-response">{output}</div>
      <Divider style={{ marginBottom: "0" }} />
    </>
  );
};

export default CodeOutput;
