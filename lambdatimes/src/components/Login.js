import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ls from "local-storage";
import styled from "styled-components";

const LoginButton = styled.span`
  cursor: pointer;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }

  handleInputChanges = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  login = (ev) => {
    ev.preventDefault();
    let un = this.state.usernameInput;
    let pw = this.state.passwordInput;
    if (un === "" || pw === "") {return}
    if (ls(`user_${un}`) && ls.get(`user_${un}`).password === pw) {
      ls.set("current-user", ls.get(`user_${un}`));
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <LoginButton onClick={this.props.toggle}>Log In</LoginButton>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Log In</ModalHeader>
          <ModalBody>
            <form action="">
              <input
                name="usernameInput"
                className="usernameField"
                type="text"
                placeholder="Username"
                value={this.state.usernameInput}
                onChange={this.handleInputChanges}
                onSubmit={this.login}
              />
              <input
                name="passwordInput"
                className="passwordField"
                type="password"
                placeholder="Password"
                value={this.state.passwordInput}
                onChange={this.handleInputChanges}
                onSubmit={this.login}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.login}>
              Log In
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Create New Account
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
