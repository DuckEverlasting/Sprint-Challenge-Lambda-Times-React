import React, { Component } from 'react';
import Content from "../Content/Content";
import styled from "styled-components";

const NeedLogin = styled.p`
  margin-top: 20px;
`

const ContentAuth = (props) => {
  if (props.loggedIn) {
    return <Content />
  } else {
    return <NeedLogin>(You must be logged in to see content)</NeedLogin>
  }  
}

export default ContentAuth;
