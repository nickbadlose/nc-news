import React, { Component } from "react";
import { userStore } from "../stores/userinfo";
import * as api from "../api";
import { navigate } from "@reach/router";

class PostArticleForm extends Component {
  state = {
    body: "",
    title: "",
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { topic } = this.props;
    const { body, title } = this.state;

    return (
      <form onSubmit={handleSubmit} className="PostCommentForm">
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleChange(e, "title")}
            required
            placeholder="Article title?"
          />
        </label>
        <label>
          <textarea
            placeholder={
              userStore.username
                ? `What are your thoughts on ${topic}?`
                : "Log in to post an article"
            }
            className="postCommentBody"
            type="text"
            value={body}
            onChange={(e) => handleChange(e, "body")}
            required
          />
          {}
          <div className="postCommentButtonDiv">
            <button
              type="submit"
              className="postCommentButton"
              disabled={!body || !userStore.username || !title}
            >
              {userStore.username
                ? "Post Article"
                : "Log in to post an article"}
            </button>
          </div>
        </label>
      </form>
    );
  }

  handleChange = (e, input) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (event) => {
    const { errorHandler, topic } = this.props;
    const { body, title } = this.state;
    event.preventDefault();
    api
      .postArticleByTopic({
        title,
        body,
        topic,
        author: userStore.username,
      })
      .then(({ article_id }) => {
        this.setState({ body: "" });
        // fetchCommentsByArticleId(article_id, undefined, undefined, true);
        navigate(`/articles/${article_id}`);
      })
      .catch(({ response }) => {
        errorHandler(response);
      });
  };
}

export default PostArticleForm;
