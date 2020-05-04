import React from "react";
import { Router } from "@reach/router";
import Articles from "./Articles";
import HomePage from "./HomePage";
import SpecificArticle from "./SpecificArticle";
import LogIn from "./LogIn";
import TopicsArticles from "./TopicsArticles";
import Topics from "./Topics";
import ErrorPage from "./ErrorPage";
import PostArticle from "./PostArticle";
import SignUp from "./SignUp";
import UserPage from "./UserPage";
import SearchPage from "./SearchPage";
import { errorStore } from "../stores/error";
import { StyledRouter } from "../styling/Routes.styles";
import { observer } from "mobx-react";

const Routes = observer(() => {
  return (
    <StyledRouter>
      {errorStore.err ? (
        <ErrorPage err={errorStore.err} />
      ) : (
        <Router className="main">
          <HomePage path="/" />
          <Articles path="/articles" />
          <SpecificArticle path="/articles/:article_id/" />
          <TopicsArticles path="/topics/articles/:topic" />
          <Topics path="/topics" />
          <LogIn path="/login" />
          <SignUp path="/signup" />
          <ErrorPage default />
          <PostArticle path="/topics/articles/:topic/post" />
          <UserPage path="/:username" />
          <SearchPage path="/search/:search" />
        </Router>
      )}
    </StyledRouter>
  );
});

export default Routes;
