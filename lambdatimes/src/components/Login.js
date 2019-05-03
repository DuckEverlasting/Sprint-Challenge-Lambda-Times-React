import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ls from "local-storage";
import styled from "styled-components";

const LoginButton = styled.span`
  display: ${props => props.visible ? "block" : "none"};
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const Input1 = styled.input`
  width: 100%;
  padding-left: 3px;
`;

const Input2 = styled.input`
  width: 100%;
  margin-top: 10px;
  padding-left: 3px;
`;

// END STYLING

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

  logIn = ev => {
    ev.preventDefault();
    let un = this.state.usernameInput;
    let pw = this.state.passwordInput;
    if (un === "" || pw === "") {
      return;
    }
    if (ls(`user_${un}`) && ls.get(`user_${un}`).password === pw) {
      ls.set("current-user", ls.get(`user_${un}`));
      window.location.reload();
    }
  };

  signUp = ev => {
    ev.preventDefault();
    let un = this.state.usernameInput;
    let pw = this.state.passwordInput;
    if (un === "" || pw === "") {
      return;
    }
    if (!ls(`user_${un}`)) {
      ls.set(`user_${un}`, { username: un, password: pw });
      ls.set("current-user", ls.get(`user_${un}`));
      window.location.reload();
    }
  };

  logOut = () => {
    ls.remove("current-user");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <LoginButton visible={ls("current-user")} onClick={this.logOut}>
          LOG OUT
        </LoginButton>
        <LoginButton visible={!ls("current-user")} onClick={this.props.toggle}>
          LOG IN
        </LoginButton>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
          size="sm"
        >
          <ModalHeader toggle={this.props.toggle}>Log In</ModalHeader>
          <ModalBody>
            <Form action="">
              <Input1
                name="usernameInput"
                type="text"
                placeholder="Username"
                value={this.state.usernameInput}
                onChange={this.handleInputChanges}
                onSubmit={this.login}
              />
              <Input2
                name="passwordInput"
                type="password"
                placeholder="Password"
                value={this.state.passwordInput}
                onChange={this.handleInputChanges}
                onSubmit={this.login}
              />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.logIn}>
              Log In
            </Button>{" "}
            <Button color="secondary" onClick={this.signUp}>
              New Account
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
