import React, { Component } from "react";
import * as api from "../api";
import ArticleComments from "./ArticleComments";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import PostCommentForm from "./PostCommentForm";
import FilterForm from "./FilterForm";
import ErrorMessage from "./ErrorMessage";
import ToggleButton from "./ToggleButton";

class SpecificArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    toggleComments: false,
    commentChange: null,
    postErr: null,
    deleteErr: null
  };
  render() {
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
      article_id,
      isLoading,
      toggleComments,
      comments,
      commentChange,
      postErr,
      deleteErr
    } = this.state;
    const {
      handleButtonChange,
      fetchCommentsByArticleId,
      errorHandler,
      deleteCommentById
    } = this;
    const { username } = this.props;
    const { date, time } = formatDate(created_at);
    return (
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3>{title}</h3>
            <p>
              Author: {author} / topic: {topic} / created: {`${date}: ${time}`}
            </p>
            <article>
              <p>{body}</p>
            </article>
            <IncrementVotes
              votes={votes}
              article_id={article_id}
              type="article"
            />
            <PostCommentForm
              username={username}
              article_id={article_id}
              fetchCommentsByArticleId={fetchCommentsByArticleId}
              errorHandler={errorHandler}
            />
            {postErr && <ErrorMessage err={postErr} />}
            <ToggleButton
              handleButtonChange={handleButtonChange}
              buttonText={`Comments: ${+comment_count + commentChange}`}
            />
            {toggleComments && (
              <section>
                <FilterForm
                  fetchCommentsByArticleId={fetchCommentsByArticleId}
                  article_id={article_id}
                  article={false}
                />
                <ArticleComments
                  comments={comments}
                  deleteCommentById={deleteCommentById}
                  username={username}
                  err={deleteErr}
                />
              </section>
            )}
          </>
        )}
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchArticleById(article_id);
    this.fetchCommentsByArticleId(article_id);
  }

  fetchArticleById = article_id => {
    api.getArticleById(article_id).then(({ data: { article } }) => {
      this.setState({ ...article, isLoading: false });
    });
  };

  fetchCommentsByArticleId = (
    article_id,
    sort_by,
    order,
    postedBoolean = false
  ) => {
    api
      .getCommentsByArticleId(article_id, sort_by, order)
      .then(({ data: { comments } }) => {
        this.setState(currentState => {
          return {
            comments,
            isLoading: false,
            commentChange: postedBoolean && ++currentState.commentChange
          };
        });
      });
  };

  handleButtonChange = () => {
    this.setState(currentState => {
      return { toggleComments: !currentState.toggleComments };
    });
  };

  deleteCommentById = comment_id => {
    const { comments } = this.state;
    const initialComments = comments;
    const filteredComments = comments.filter(
      comment => comment.comment_id !== comment_id
    );
    this.setState(currentState => ({
      comments: filteredComments,
      commentChange: --currentState.commentChange,
      deleteErr: null
    }));
    api.removeCommentById(comment_id).catch(() => {
      this.setState(currentState => ({
        comments: initialComments,
        deleteErr: { msg: "comment could not be removed" },
        commentChange: ++currentState.commentChange
      }));
    });
  };

  errorHandler = err => {
    this.setState({ postErr: err });
  };
}

export default SpecificArticle;
