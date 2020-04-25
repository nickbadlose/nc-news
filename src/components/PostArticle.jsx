import React, { Component } from "react";
import PostArticleForm from "./PostArticleForm";
import ErrorPage from "./ErrorPage";

class PostArticle extends Component {
  state = {
    err: null,
  };
  render() {
    const { topic } = this.props;
    const { err } = this.state;
    return (
      <div>
        {" "}
        {err ? <ErrorPage err={err} /> : <PostArticleForm topic={topic} />}
      </div>
    );
  }

  errorHandler = ({ status, statusText }) => {
    this.setState({
      err: { status: status, msg: statusText },
    });
  };
}

export default PostArticle;
