import React, { Component } from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import * as api from "../api";

class CommentTile extends Component {
  state = {
    votes: this.props.votes
  };
  render() {
    const { author, body, created_at } = this.props;
    const { votes } = this.state;
    const { handleVotesChange } = this;
    const { date, time } = formatDate(created_at);
    return (
      <li>
        <p>
          Author: {author} / Created: {`${date}: ${time}`}
        </p>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <IncrementVotes handleVotesChange={handleVotesChange} />
      </li>
    );
  }

  handleVotesChange = event => {
    const { comment_id } = this.props;
    api.patchCommentByArticleId(comment_id, event.target.value).then(votes => {
      this.setState({ votes });
    });
  };
}

export default CommentTile;
