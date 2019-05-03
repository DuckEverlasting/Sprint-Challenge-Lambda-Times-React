import React from "react";
import styled from "styled-components";
import Login from "./Login"

const TopBarContainerSC = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  height: 44px;
  z-index: 3;
`
const TopBarSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
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
const SpacerSC = styled.div`
  width:  ${props => props.visible ? "8.5px" : "0"};
  transition: width 0s;
  transition-delay: ${props => props.visible ? "0" : ".32s"};
`

// END STYLING


class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  spacerHandler = () => {
    if (window.innerWidth > document.documentElement.clientWidth) {
      return this.state.modal
    } else {
      return false
    }
  }

  render(){
    return (
      <TopBarContainerSC>
        <SpacerSC visible={this.spacerHandler()}/>
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
              <Login modal={this.state.modal} toggle={this.toggle} />
            </ContainerRightSC>
          </ContainerSC>
        </TopBarSC>
        <SpacerSC visible={this.spacerHandler()}/>
      </TopBarContainerSC>
    );
  };
};

export default TopBar;
