import React, { Component } from "react";
import { userStore } from "../stores/userinfo";
import * as api from "../api";
import { navigate } from "@reach/router";

class PostTopicForm extends Component {
  state = {
    description: "",
    slug: "",
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { description, slug } = this.state;

    return (
      <form onSubmit={handleSubmit} className="PostCommentForm">
        <label>
          <input
            type="text"
            value={slug}
            onChange={(e) => handleChange(e, "slug")}
            required
            placeholder="What topic do you think we should be talking about?"
          />
        </label>
        <label>
          <textarea
            placeholder={
              userStore.username
                ? `Describe your topic of conversation?`
                : "Log in to post a topic"
            }
            className="postCommentBody"
            type="text"
            value={description}
            onChange={(e) => handleChange(e, "description")}
            required
          />
          {}
          <div className="postCommentButtonDiv">
            <button
              type="submit"
              className="postCommentButton"
              disabled={!description || !userStore.username || !slug}
            >
              {userStore.username ? "Post Topic" : "Log in to post a topic"}
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
    const { errorHandler } = this.props;
    const { description, slug } = this.state;
    event.preventDefault();
    api
      .postTopic({
        slug,
        description,
      })
      .then((topic) => {
        this.setState({ description: "", slug: "" });
        navigate(`/topics/articles/${topic}`);
      })
      .catch(({ response }) => {
        errorHandler({ status: response.status, msg: response.data.msg });
      });
  };
}

export default PostTopicForm;
