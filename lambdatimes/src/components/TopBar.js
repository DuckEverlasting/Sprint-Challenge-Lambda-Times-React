import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContainerSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerLeftSC = styled(ContainerSC)`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const SpanLeftSC = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenterSC = styled(ContainerSC)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const SpanCenterSC = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ContainerRightSC = styled(ContainerSC)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const SpanRightSC = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarSC>
      <ContainerSC>
        <ContainerLeftSC>
          <SpanLeftSC>TOPICS</SpanLeftSC>
          <SpanLeftSC>SEARCH</SpanLeftSC>
        </ContainerLeftSC>
        <ContainerCenterSC>
          <SpanCenterSC>GENERAL</SpanCenterSC>
          <SpanCenterSC>BROWNBAG</SpanCenterSC>
          <SpanCenterSC>RANDOM</SpanCenterSC>
          <SpanCenterSC>MUSIC</SpanCenterSC>
          <SpanCenterSC>ANNOUNCEMENTS</SpanCenterSC>
        </ContainerCenterSC>
        <ContainerRightSC>
          <SpanRightSC>LOG IN</SpanRightSC>
        </ContainerRightSC>
      </ContainerSC>
    </TopBarSC>
  );
};

export default TopBar;
