import React from "react";
import errorImg from "../logos/error.png";
import { Main } from "../styling/ErrorPage.styles";
import Button from "react-bootstrap/Button";
import { navigate } from "@reach/router";
import { errorStore } from "../stores/error";

const ErrorPage = ({ err }) => {
  const handleError = () => {
    errorStore.err = null;
    navigate("/");
  };

  return (
    <Main>
      <img src={errorImg} alt="Error!" />
      <h2>{err.status}</h2>
      <h3>{err.msg ? err.msg : "Oops! Something went wrong!"}</h3>
      <Button onClick={handleError}>Home Page</Button>
    </Main>
  );
};

export default ErrorPage;
