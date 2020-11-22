import React from "react";
import { Button, Divider } from "antd";
import "./CodeAction.css";

const CodeAction = (props) => {
  const { submitCode, loading } = props;

  return (
    <>
      <div className="code-action">
        <Button
          type="primary"
          shape="round"
          size="large"
          disabled={loading ? true : false}
          onClick={submitCode}
        >
          {loading ? "Executing..." : <p>Compile &amp; Run</p>}
        </Button>
      </div>
      <Divider style={{ marginBottom: "0" }} />
    </>
  );
};

export default CodeAction;
