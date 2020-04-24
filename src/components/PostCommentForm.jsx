import React, { Component } from "react";
import * as api from "../api";
import { userStore } from "../stores/userinfo";

class PostCommentForm extends Component {
  state = {
    body: "",
    users: [],
  };
  render() {
    const { body, users } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit} className="PostCommentForm">
        <label>
          <textarea
            placeholder={
              userStore.username
                ? "What are your thoughts?"
                : "Log in to post a comment"
            }
            className="postCommentBody"
            type="text"
            value={body}
            onChange={handleChange}
            required
          />
          {}
          <div className="postCommentButtonDiv">
            <button
              type="submit"
              className="postCommentButton"
              disabled={
                users.every((user) => {
                  return user.username !== userStore.username;
                }) || !body
              }
            >
              Comment
            </button>
          </div>
        </label>
      </form>
    );
  }

  componentDidMount() {
    api.fetchUsers().then((users) => {
      this.setState({ users });
    });
  }

  handleChange = (event) => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = (event) => {
    const { article_id, fetchCommentsByArticleId, errorHandler } = this.props;
    const { body } = this.state;
    event.preventDefault();
    api
      .postCommentByArticleId(article_id, {
        username: userStore.username,
        body,
      })
      .then(() => {
        this.setState({ body: "" });
        fetchCommentsByArticleId(article_id, undefined, undefined, true);
      })
      .catch(({ response }) => {
        errorHandler(response);
      });
  };
}

export default PostCommentForm;
