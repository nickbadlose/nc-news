import React, { Component } from "react";
import * as api from "../api";

class PostCommentForm extends Component {
  state = {
    body: ""
  };
  render() {
    const { body } = this.state;
    const { handleChange, handleSubmit } = this;
    const { username } = this.props;
    return (
      <form onSubmit={handleSubmit} className="PostCommentForm">
        <label>
          <input type="text" value={body} onChange={handleChange} required />
          {}
          <button>
            {username
              ? body
                ? "Post comment"
                : "Add a comment"
              : "log in to post a comment"}
          </button>
        </label>
        {/* {username && <span> you need to log in to post a comment</span>} */}
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
          msg: "log in to post a comment"
        });
      });
  };
}

export default PostCommentForm;
