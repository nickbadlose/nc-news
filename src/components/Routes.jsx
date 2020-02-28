import React from "react";
import { Router } from "@reach/router";
import Articles from "./Articles";
import HomePage from "./HomePage";
import SpecificArticle from "./SpecificArticle";
import LogIn from "./LogIn";
import TopicsArticles from "./TopicsArticles";
import Topics from "./Topics";
import ErrorPage from "./ErrorPage";

const Routes = ({ logIn, username }) => {
  return (
    <>
      <Router className="main">
        <HomePage path="/" />
        <Articles path="/articles" />
        <SpecificArticle path="/articles/:article_id/" username={username} />
        <TopicsArticles path="/topics/articles/:topic" />
        <Topics path="/topics" />
        <LogIn path="/login" logIn={logIn} />
        <ErrorPage default />
      </Router>
    </>
  );
};

export default Routes;
