import React from "react";
import { Result } from "antd";

const Success = (props) => {
  const { output, cpuTime, memory } = props;
  return (
    <>
      <Result
        status="success"
        title={<p style={{ color: "green" }}>Success!</p>}
      />
      <div
        style={{ fontSize: "20px", textAlign: "center", margin: "auto 48px" }}
      >
        {output && (
          <p>
            <b style={{ color: "#006666" }}>Output :</b> {output}
          </p>
        )}
        {cpuTime && (
          <p>
            <b style={{ color: "#006666" }}>CPU Time :</b> {cpuTime} sec(s)
          </p>
        )}
        {memory && (
          <p>
            <b style={{ color: "#006666" }}>Memory :</b> {memory} kilobyte(s)
          </p>
        )}
      </div>
    </>
  );
};

export default Success;
