import React from "react";
import { observer } from "mobx-react";
import SignUpForm from "./SignUpForm";
import { Link } from "@reach/router";

const SignUp = observer(() => {
  return (
    <main className="logInPage">
      <div className="logInForm">
        <div>
          <SignUpForm />
        </div>
        <Link to="/login">Already have an account? Log in.</Link>
      </div>
    </main>
  );
});

export default SignUp;
