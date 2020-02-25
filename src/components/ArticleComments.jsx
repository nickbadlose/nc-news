import React, { Component } from "react";
import CommentTile from "./CommentTile";
import * as api from "../api";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    const { comments, isLoading } = this.state;
    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <ul>
          {comments.map(comment => {
            return <CommentTile {...comment} key={comment.comment_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchCommentsByArticleId();
  }

  fetchCommentsByArticleId = () => {
    const { article_id } = this.props;
    api.getCommentsByArticleById(article_id).then(({ data: { comments } }) => {
      this.setState({ comments, isLoading: false });
    });
  };
}

export default ArticleComments;
