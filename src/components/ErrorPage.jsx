import React from "react";
import errorImg from "../logos/error.png";
import { Main } from "../styling/ErrorPage.styles";
import { mainTheme } from "../styling/themes.styling";

const ErrorPage = ({
  err = { status: 500, msg: "Oops, can't connect to the server!" },
}) => {
  return (
    <Main theme={mainTheme}>
      <img src={errorImg} alt="Error!" />
      <h2>{err.status}</h2>
      <h3>{err.msg}</h3>
    </Main>
  );
};

export default ErrorPage;
