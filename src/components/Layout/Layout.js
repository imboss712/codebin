import React, { Component } from "react";
import { Row, Col } from "antd";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Editor from "../Editor/Editor";
import CodeInput from "../CodeInput/CodeInput";
import CodeAction from "../CodeAction/CodeAction";
import Tip from "../Tip/Tip";
import Output from "../Output/Output";
import OutputAction from "../OutputAction/OutputAction";

import { langMenuOptions, themeMenuOptions } from "../../utils/MenuOptions";
import { RUN_URL, CLIENT_ID, CLIENT_SECRET } from "../../utils/jdoodle";

class Layout extends Component {
  state = {
    lang: langMenuOptions[0].value,
    versionIndex: langMenuOptions[0].versionIndex,
    editorLang: langMenuOptions[0].lang,
    theme: localStorage.getItem("theme") || themeMenuOptions[0].value,
    showLine: true,
    code: null,
    input: "",
    loading: false,
    result: null,
    error: null
  };

  handleLangChange = (value) => {
    this.setState({
      ...this.state,
      lang: value,
      editorLang: langMenuOptions.find((elang) => elang.value === value).lang,
      versionIndex: langMenuOptions.find((elang) => elang.value === value)
        .versionIndex
    });
  };

  handleThemeChange = (value) => {
    this.setState({ ...this.state, theme: value });
    localStorage.setItem("theme", value);
  };

  handleShowLine = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        showLine: !prevState.showLine
      };
    });
  };

  handleCodeChange = (newCode) => {
    this.setState({
      ...this.state,
      code: newCode
    });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  handleClearOutput = () => {
    this.setState({
      ...this.state,
      loading: false,
      result: null,
      error: null
    });
  };

  sendCodeToServer = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        script: this.state.code,
        stdin: this.state.input,
        language: this.state.lang,
        versionIndex: this.state.versionIndex
      })
    };

    this.setState({
      ...this.state,
      loading: true
    });

    try {
      const res = await fetch(RUN_URL, options);
      const response = await res.json();
      this.setState({
        ...this.state,
        result: response,
        loading: false
      });
    } catch (err) {
      this.setState({
        ...this.state,
        error: {
          title: "Network Error!",
          subTitle: "Check your internet connection."
        },
        loading: false
      });
    }
  };

  render() {
    const {
      lang,
      editorLang,
      theme,
      showLine,
      code,
      input,
      result,
      error,
      loading
    } = this.state;

    return (
      <>
        <Header
          lang={lang}
          changeLang={this.handleLangChange}
          theme={theme}
          changeTheme={this.handleThemeChange}
          showLine={showLine}
          changeShowLine={this.handleShowLine}
        />

        <Row>
          <Col md={{ span: 24 }} lg={{ span: 12 }}>
            <Editor
              editorLang={editorLang}
              theme={theme}
              showLine={showLine}
              code={code}
              changeCode={this.handleCodeChange}
            />
            <CodeInput input={input} changeInput={this.handleInputChange} />
            <CodeAction submitCode={this.sendCodeToServer} loading={loading} />
          </Col>

          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            style={{ borderLeft: "1px solid #f0f0f0" }}
          >
            <Tip />
            <OutputAction clearOutput={this.handleClearOutput} />
            <Output result={result} error={error} loading={loading} />
          </Col>
        </Row>

        <Footer />
      </>
    );
  }
}

export default Layout;
