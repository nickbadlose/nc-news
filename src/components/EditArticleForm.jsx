import React, { Component } from "react";
// import { userStore } from "../stores/userinfo";

class EditArticleForm extends Component {
  state = {
    body: this.props.body,
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea
            className="postCommentBody"
            type="text"
            value={this.state.body}
            onChange={(e) => this.handleChange(e, "body")}
            required
          />
        </label>
        <button>update</button>
      </form>
    );
  }

  handleChange = (e, input) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editArticle(this.state.body);
  };
}

export default EditArticleForm;
