import React, { Component } from "react";
import { Router } from "@reach/router";
import Articles from "./Articles";
import HomePage from "./HomePage";
import SpecificArticle from "./SpecificArticle";

class Routes extends Component {
  state = {
    loggeingIn: ""
  };
  render() {
    return (
      <>
        <Router>
          <HomePage path="/" />
          <Articles path="/articles" />
          <SpecificArticle path="/articles/:article_id/" />
        </Router>
      </>
    );
  }
}

export default Routes;
