import React, { Component } from "react";
import * as api from "../api";
import ArticleComments from "./ArticleComments";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";

class SpecificArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    toggleComments: false
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
    } = this.state.article;
    const { isLoading, toggleComments } = this.state;
    const { handleCommentsChange, handleVotesChange } = this;
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
            <p>
              Votes: {votes}{" "}
              <IncrementVotes handleVotesChange={handleVotesChange} />
            </p>
            <button value={toggleComments} onClick={handleCommentsChange}>
              <p>Comments: {comment_count}</p>
            </button>
            {toggleComments && (
              <ArticleComments path="/comments" article_id={article_id} />
            )}
          </>
        )}
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchArticle(article_id);
  }

  fetchArticle = article_id => {
    api.getArticleById(article_id).then(({ data: { article } }) => {
      this.setState({ article, isLoading: false });
    });
  };

  handleCommentsChange = event => {
    this.setState(currentState => {
      return { toggleComments: !currentState.toggleComments };
    });
  };

  handleVotesChange = event => {
    const { article_id } = this.state.article;
    api.patchArticleById(article_id, event.target.value).then(votes => {
      this.setState(currentState => {
        return { article: { ...currentState.article, votes } };
      });
    });
  };
}

export default SpecificArticle;
