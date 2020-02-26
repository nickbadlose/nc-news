import React, { Component } from "react";

class LogInForm extends Component {
  state = {
    usernameInput: ""
  };
  render() {
    const { usernameInput } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form name={usernameInput} onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input type="text" value={usernameInput} onChange={handleChange} />
        </label>
        <button>Log in</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ usernameInput: event.target.value });
  };

  handleSubmit = event => {
    const { logIn } = this.props;
    event.preventDefault();
    console.log(event.target.name);
    logIn(event.target.name);
  };
}

export default LogInForm;
