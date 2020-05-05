import React from "react";
import errorImg from "../logos/error.png";
import { Main } from "../styling/ErrorPage.styles";
import { mainTheme } from "../styling/themes.styling";

const ErrorPage = ({ err }) => {
  return (
    <Main theme={mainTheme}>
      <img src={errorImg} alt="Error!" />
      <h2>{err.status}</h2>
      <h3>{err.msg ? err.msg : "Oops! Something went wrong!"}</h3>
    </Main>
  );
};

export default ErrorPage;
