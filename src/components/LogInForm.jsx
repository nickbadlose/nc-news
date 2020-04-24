import React, { Component } from "react";
import { userStore } from "../stores/userinfo";
import ErrorMessage from "./ErrorMessage";

class LogInForm extends Component {
  state = {
    username: "",
    password: "",
    invalidUser: null,
  };
  render() {
    const { username, password, invalidUser } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => handleChange(e, "username")}
            required
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => handleChange(e, "password")}
            required
          />
        </label>
        <button>Log in</button>
        {invalidUser && <ErrorMessage err={invalidUser} />}
      </form>
    );
  }

  handleChange = (e, input) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    this.setState({ invalidUser: null });
    userStore.logIn(username, password).catch((err) => {
      this.setState({ invalidUser: { msg: "Invalid username or password!" } });
    });
    this.setState({ username: "", password: "" });
  };
}

export default LogInForm;
