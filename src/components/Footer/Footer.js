import React from "react";
import { HeartFilled } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      Designed and developed with <HeartFilled style={{ color: "red" }} /> by{" "}
      <a
        href="https://www.github.com/imboss712"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shashi Kant Yadav
      </a>
    </div>
  );
};

export default Footer;
