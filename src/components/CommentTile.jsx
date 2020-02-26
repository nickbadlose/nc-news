import React, { Component } from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";

class CommentTile extends Component {
  state = {
    votes: this.props.votes
  };
  render() {
    const { author, body, created_at, comment_id } = this.props;
    const { votes } = this.state;
    const { date, time } = formatDate(created_at);
    return (
      <li>
        <p>
          Author: {author} / Created: {`${date}: ${time}`}
        </p>
        <p>{body}</p>
        <IncrementVotes votes={votes} comment_id={comment_id} type="comment" />
      </li>
    );
  }
}

export default CommentTile;
