import React, { useState } from "react";
import { Select, Button, Modal } from "antd";
import {
  NumberOutlined,
  SettingOutlined,
  SettingFilled
} from "@ant-design/icons";
import "./Header.css";

import { langMenuOptions, themeMenuOptions } from "../../utils/MenuOptions";

const { Option, OptGroup } = Select;

const Header = (props) => {
  const {
    lang,
    theme,
    showLine,
    changeLang,
    changeTheme,
    changeShowLine
  } = props;

  const [showSettingModal, setShowSettingModal] = useState(false);

  const handleSettingModal = () => {
    setShowSettingModal((isOpen) => !isOpen);
  };

  const setting = (
    <>
      <div className="header-nav">
        <Select
          defaultValue={lang}
          size="large"
          style={{ width: 190 }}
          onChange={changeLang}
        >
          {langMenuOptions.map((option) => {
            return (
              <Option key={option.label} value={option.value}>
                {option.label}
              </Option>
            );
          })}
        </Select>
      </div>

      <div className="header-nav">
        <Select
          defaultValue={theme}
          size="large"
          style={{ width: 190 }}
          onChange={changeTheme}
        >
          <OptGroup label="Dark Theme">
            {themeMenuOptions.map((option) => {
              return (
                option.type === "dark" && (
                  <Option key={option.label} value={option.value}>
                    {option.label}
                  </Option>
                )
              );
            })}
          </OptGroup>
          <OptGroup label="Light Theme">
            {themeMenuOptions.map((option) => {
              return (
                option.type === "light" && (
                  <Option key={option.label} value={option.value}>
                    {option.label}
                  </Option>
                )
              );
            })}
          </OptGroup>
        </Select>
      </div>

      <div className="header-nav">
        <Button
          type="primary"
          icon={<NumberOutlined />}
          size="large"
          onClick={changeShowLine}
        >
          {showLine ? "Hide Line Number" : "Show Line Number"}
        </Button>
      </div>
    </>
  );

  return (
    <>
      <div className="header-menu">
        <div className="header-left">
          <div className="header-nav title">
            c
            <span className="title-wheel">
              <SettingFilled />
            </span>
            debin
          </div>
        </div>

        <div className="header-right">{setting}</div>

        <div className="header-right-sm">
          <div className="header-nav modal-icon">
            <SettingOutlined onClick={handleSettingModal} />
          </div>
          <Modal
            title="Change Language &amp; Theme"
            visible={showSettingModal}
            centered
            footer={null}
            onCancel={handleSettingModal}
            style={{ textAlign: "center" }}
          >
            {setting}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;
