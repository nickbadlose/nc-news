import React from "react";
import { userStore } from "../stores/userinfo";
import { observer } from "mobx-react";

const SignUp = observer(() => {
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
        </div>
      )}
    </main>
  );
});

export default SignUp;
