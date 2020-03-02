import React, { Component } from "react";
import LogInForm from "./LogInForm";
import * as api from "../api";

class LogIn extends Component {
  state = {
    users: [],
    isLoading: true
  };
  render() {
    const { logIn, username, logOut } = this.props;
    const { users, isLoading } = this.state;
    return (
      <main className="logInPage">
        {username.length ? (
          <div>
            <h2>You are logged in as {username}</h2>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="logInForm">
            <div>
              <LogInForm logIn={logIn} />
            </div>
            <p>Choose a user from this list of valid user accounts:</p>
            <ul>
              {users.map(user => {
                return <li key={user.username}>{user.username}</li>;
              })}
            </ul>
          </div>
        )}
      </main>
    );
  }
  componentDidMount() {
    api.fetchUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  }
}

export default LogIn;
