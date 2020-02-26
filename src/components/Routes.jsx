import React, { Component } from "react";
import { Router } from "@reach/router";
import Articles from "./Articles";
import HomePage from "./HomePage";
import SpecificArticle from "./SpecificArticle";
import LogIn from "./LogIn";

class Routes extends Component {
  state = {
    loggeingIn: ""
  };
  render() {
    const { logIn } = this.props;
    return (
      <>
        <Router>
          <HomePage path="/" />
          <Articles path="/articles" />
          <SpecificArticle path="/articles/:article_id/" />
          <LogIn path="/login" logIn={logIn} />
        </Router>
      </>
    );
  }
}

export default Routes;
