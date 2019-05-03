import React, { Component } from "react";
import Content from "../Content/Content";
import ls from "local-storage";
import styled from "styled-components";

const NeedLogin = styled.p`
  margin-top: 20px;
`;

class ContentAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    console.log(ls("current-user"))
    if (ls("current-user")) {
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    if (ls("current-user")) {
      return <Content />;
    } else {
      return <NeedLogin>(You must be logged in to see content)</NeedLogin>;
    }
  }
}

export default ContentAuth;
