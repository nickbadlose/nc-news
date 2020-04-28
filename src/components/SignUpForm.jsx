import React, { Component } from "react";
import ErrorMessage from "./ErrorMessage";
import * as api from "../api";
import { navigate } from "@reach/router";
import { userStore } from "../stores/userinfo";

class SignUpForm extends Component {
  state = {
    username: "",
    name: "",
    password: "",
    avatar_url: "",
    userExists: null,
  };
  render() {
    const { username, name, password, avatar_url, userExists } = this.state;
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
          name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => handleChange(e, "name")}
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
        <label>
          avatar url (optional):{" "}
          <input
            type="avatar_url"
            value={avatar_url}
            onChange={(e) => handleChange(e, "avatar_url")}
          />
        </label>
        <button>Sign up!</button>
        {userExists && <ErrorMessage err={userExists} />}
      </form>
    );
  }

  handleChange = (e, input) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    const { username, name, password, avatar_url } = this.state;
    e.preventDefault();
    this.setState({ userExists: null });
    api
      .postUser({ username, name, password, avatar_url })
      .then(() => {
        userStore.logIn(username, password);
        navigate("/");
      })
      .catch((err) => {
        this.setState({
          userExists: { msg: "Username taken or invalid format (no spaces)!" },
        });
      });
    this.setState({ username: "", name: "", password: "", avatar_url: "" });
  };
}

export default SignUpForm;
