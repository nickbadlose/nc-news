import React from "react";
import { Router } from "@reach/router";
import Articles from "./Articles";
import HomePage from "./HomePage";
import SpecificArticle from "./SpecificArticle";
import LogIn from "./LogIn";

const Routes = ({ logIn, username }) => {
  return (
    <>
      <Router>
        <HomePage path="/" />
        <Articles path="/articles" />
        <SpecificArticle path="/articles/:article_id/" username={username} />
        <LogIn path="/login" logIn={logIn} />
      </Router>
    </>
  );
};

export default Routes;
