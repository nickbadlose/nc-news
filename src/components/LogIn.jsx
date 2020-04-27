import React from "react";
import LogInForm from "./LogInForm";
import { userStore } from "../stores/userinfo";
import { observer } from "mobx-react";
import { Link } from "@reach/router";

const LogIn = observer(() => {
  return (
    <main className="logInPage">
      {userStore.username.length ? (
        <div>
          <h2>You are logged in as {userStore.username}</h2>
          <button onClick={userStore.logOut}>Log out</button>
        </div>
      ) : (
        <div className="logInForm">
          <div>
            <LogInForm />
          </div>
          <Link to="/signup">Don't have an account? Sign up.</Link>
        </div>
      )}
    </main>
  );
});

export default LogIn;
