import React from "react";
import errorImg from "../logos/error.png";
import { Main } from "../styling/ErrorPage.styles";

const ErrorPage = ({ err }) => {
  return (
    <Main>
      <img src={errorImg} alt="Error!" />
      <h2>{err.status}</h2>
      <h3>{err.msg ? err.msg : "Oops! Something went wrong!"}</h3>
      <p>
        Need to add a refresh page button saying go back or something to reset
        error page
      </p>
    </Main>
  );
};

export default ErrorPage;
