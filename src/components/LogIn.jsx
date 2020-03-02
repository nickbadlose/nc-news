// import React from "react";
import LogInForm from "./LogInForm";
import * as api from "../api";

// const LogIn = ({ logIn, username, logOut }) => {
//   return (
//     <main>
//       {username.length ? (
//         <div>
//           <h2>You are logged in as {username}</h2>
//           <button onClick={logOut}>Log out</button>
//         </div>
//       ) : (
//         <div className="logInForm">
//           <LogInForm logIn={logIn} />
//         </div>
//       )}
//     </main>
//   );
// };

// export default LogIn;

// turn into class and fetch users and print users

import React, { Component } from "react";

class LogIn extends Component {
  state = {
    users: []
  };
  render() {
    const { logIn, username, logOut } = this.props;
    const { users } = this.state;
    return (
      <main>
        {username.length ? (
          <div>
            <h2>You are logged in as {username}</h2>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <div className="logInPage">
            <div>
              <LogInForm logIn={logIn} />
            </div>
            <p>Choose a user from this list of valid user accounts:</p>
            <ul>
              {users.map(user => {
                return <li>{user.username}</li>;
              })}
            </ul>
          </div>
        )}
      </main>
    );
  }
  componentDidMount() {
    api.fetchUsers().then(users => {
      this.setState({ users });
    });
  }
}

export default LogIn;
