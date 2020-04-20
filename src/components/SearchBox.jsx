import React, { Component } from "react";
import { checkValidUser } from "../utils/utils";
import * as api from "../api";

class SearchBox extends Component {
  state = {
    users: [],
    usernameInput: "",
  };
  render() {
    const { usernameInput } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form onSubmit={(event) => handleSubmit(event, usernameInput)}>
          <label>
            <input
              type="text"
              placeholder="Enter username e.g jessjelly"
              value={usernameInput}
              onChange={handleChange}
              required
            />
          </label>
          <button>Go!</button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    api.fetchUsers().then((users) => {
      this.setState({ users });
    });
  }

  handleChange = (event) => {
    this.setState({ usernameInput: event.target.value });
  };

  handleSubmit = (event, username) => {
    const { fetchArticles, errorHandler } = this.props;
    const { users, usernameInput } = this.state;
    event.preventDefault();
    if (!checkValidUser(users, username)) {
      errorHandler(false);
      fetchArticles(null, null, null, null, usernameInput);
      this.setState({ usernameInput: "" });
    } else {
      errorHandler(true);
    }
  };
}

export default SearchBox;
