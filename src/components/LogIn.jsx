import React from "react";
import LogInForm from "./LogInForm";

const LogIn = ({ logIn }) => {
  return (
    <main>
      <LogInForm logIn={logIn} />
    </main>
  );
};

export default LogIn;
