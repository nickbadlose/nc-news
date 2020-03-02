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
      <div className="IncrementVotes">
        <button
          onClick={() => handleVotesChange(1)}
          disabled={voteDifference === 1 && true}
          className="incrementVotesButton"
        >
          ⬆
        </button>
        Votes: {votes + voteDifference}
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
            err: { msg: "unable to change vote" }
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
            err: { msg: "unable to change vote" }
          };
        });
      });
    }
  };
}

export default IncrementVotes;
