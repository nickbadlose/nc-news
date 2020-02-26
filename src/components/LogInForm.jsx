import React, { Component } from "react";
import * as api from "../api";
import { checkValidUser } from "../utils/utils";

class LogInForm extends Component {
  state = {
    users: [],
    usernameInput: "",
    invalidUsername: false
  };
  render() {
    const { usernameInput, invalidUsername } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={event => handleSubmit(event, usernameInput)}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={usernameInput}
            onChange={handleChange}
            required
          />
        </label>
        <button>Log in</button>
        {invalidUsername && <span>User doesn't exist</span>}
      </form>
    );
  }

  componentDidMount() {
    api.fetchUsers().then(users => {
      this.setState({ users });
    });
  }

  handleChange = event => {
    const { users, invalidUsername } = this.state;
    if (!event.target.value) {
      this.setState({ invalidUsername: false });
    }
    if (event.target.value && !invalidUsername) {
      this.setState({ invalidUsername: true });
    }
    if (!checkValidUser(users, event.target.value)) {
      this.setState({ invalidUsername: false });
    }
    this.setState({ usernameInput: event.target.value });
  };

  handleSubmit = (event, username) => {
    const { logIn } = this.props;
    const { users, usernameInput } = this.state;
    event.preventDefault();
    if (!checkValidUser(users, username)) {
      logIn(usernameInput);
      this.setState({ usernameInput: "" });
    }
  };
}

export default LogInForm;
