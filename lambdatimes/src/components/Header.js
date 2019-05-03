import React from "react";
import styled from "styled-components";

const HeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const DateSC = styled(Span)`
  margin-left: 25px;
  flex: 1;
`
const H1SC = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const TempSC = styled(Span)`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`


const Header = () => {
  return (
    <HeaderSC>
      <DateSC>SMARCH 32, 2018</DateSC>
      <H1SC>Lambda Times</H1SC>
      <TempSC>98°</TempSC>
    </HeaderSC>
  );
};

export default Header;
