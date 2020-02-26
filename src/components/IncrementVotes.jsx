import React, { Component } from "react";
import * as api from "../api";
import ErrorMessage from "./ErrorMessage";

class IncrementVotes extends Component {
  state = {
    voteDifference: 0,
    err: null
  };
  render() {
    const { handleVotesChange } = this;
    const { voteDifference, err } = this.state;
    const { votes } = this.props;
    return (
      <p>
        Votes: {votes + voteDifference}
        <span>
          <button
            onClick={() => handleVotesChange(1)}
            disabled={voteDifference === 1 && true}
          >
            Upvote
          </button>
          <button
            onClick={() => handleVotesChange(-1)}
            disabled={voteDifference === -1 && true}
          >
            Downvote
          </button>
        </span>
        {err && <ErrorMessage err={err} />}
      </p>
    );
  }

  handleVotesChange = voteChange => {
    const { comment_id, article_id, type } = this.props;
    if (type === "comment") {
      this.setState(currentState => {
        return {
          voteDifference: currentState.voteDifference + voteChange,
          err: null
        };
      });
      api.patchCommentById(comment_id, voteChange).catch(() => {
        this.setState(currentState => {
          return {
            voteDifference: currentState.voteDifference - voteChange,
            err: { status: 500, msg: "unable to change vote" }
          };
        });
      });
    }
    if (type === "article") {
      this.setState(currentState => {
        return {
          voteDifference: currentState.voteDifference + voteChange,
          err: null
        };
      });
      api.patchArticleById(article_id, voteChange).catch(() => {
        this.setState(currentState => {
          return {
            voteDifference: currentState.voteDifference - voteChange,
            err: { status: 500, msg: "unable to change vote" }
          };
        });
      });
    }
  };
}

export default IncrementVotes;
