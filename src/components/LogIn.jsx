import React from "react";
import LogInForm from "./LogInForm";

const LogIn = props => {
  const { logIn } = props;
  return (
    <main>
      <LogInForm logIn={logIn} />
    </main>
  );
};

export default LogIn;
