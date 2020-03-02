import React, { Component } from "react";
import * as api from "../api";

class PostCommentForm extends Component {
  state = {
    body: "",
    loggedOut: false
  };
  render() {
    const { body, loggedOut } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit} className="PostCommentForm">
        <label>
          Add a comment:{" "}
          <input type="text" value={body} onChange={handleChange} required />
          {loggedOut && <span>you need to log in to post a comment</span>}
          {}
        </label>
        <button>post</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    const {
      username,
      article_id,
      fetchCommentsByArticleId,
      errorHandler
    } = this.props;
    const { body } = this.state;
    event.preventDefault();
    api
      .postCommentByArticleId(article_id, { username, body })
      .then(() => {
        this.setState({ body: "" });
        fetchCommentsByArticleId(article_id, undefined, undefined, true);
      })
      .catch(() => {
        errorHandler({
          msg: "need to log in to post a comment"
        });
      });
  };
}

export default PostCommentForm;
