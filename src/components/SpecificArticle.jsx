import React, { Component } from "react";
import * as api from "../api";
import ArticleComments from "./ArticleComments";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import PostCommentForm from "./PostCommentForm";
import FilterForm from "./FilterForm";
import ErrorMessage from "./ErrorMessage";

class SpecificArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    toggleComments: false,
    postedComment: null,
    err: null
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
      article_id
    } = this.state;
    const {
      isLoading,
      toggleComments,
      comments,
      postedComment,
      err
    } = this.state;
    const {
      handleCommentsChange,
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
              postedComment={postedComment}
              errorHandler={errorHandler}
            />
            {err && <ErrorMessage err={err} />}
            <button value={toggleComments} onClick={handleCommentsChange}>
              <p>Comments: {+comment_count + postedComment}</p>
            </button>
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
            postedComment: postedBoolean && ++currentState.postedComment
          };
        });
      });
  };

  handleCommentsChange = () => {
    this.setState(currentState => {
      return { toggleComments: !currentState.toggleComments };
    });
  };

  deleteCommentById = () => {
    console.log("hey");
  };

  errorHandler = err => {
    this.setState({ err });
  };
}

export default SpecificArticle;
