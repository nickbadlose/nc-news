import React, { Component } from "react";
import * as api from "../api";
import ErrorMessage from "./ErrorMessage";

class IncrementVotes extends Component {
  state = {
    voteDifference: 0,
    err: null,
  };
  render() {
    const { handleVotesChange } = this;
    const { voteDifference, err } = this.state;
    const { votes } = this.props;
    return (
      <div className="IncrementVotes">
        <button
          onClick={() => handleVotesChange(1)}
          disabled={voteDifference === 1 && true}
          className="incrementVotesButton"
        >
          ⬆
        </button>
        {votes + voteDifference}
        <button
          onClick={() => handleVotesChange(-1)}
          disabled={voteDifference === -1 && true}
          className="incrementVotesButton"
        >
          ⬇
        </button>
        {err && <ErrorMessage err={err} />}
      </div>
    );
  }

  handleVotesChange = (voteChange) => {
    const { comment_id, article_id } = this.props;

    this.setState((currentState) => {
      return {
        voteDifference: currentState.voteDifference + voteChange,
        err: null,
      };
    });

    const promise = comment_id
      ? api.patchCommentById(comment_id, voteChange)
      : api.patchArticleById(article_id, voteChange);

    promise.catch(() => {
      this.setState((currentState) => {
        return {
          voteDifference: currentState.voteDifference - voteChange,
          err: { msg: "unable to change vote" },
        };
      });
    });
  };
}

export default IncrementVotes;
