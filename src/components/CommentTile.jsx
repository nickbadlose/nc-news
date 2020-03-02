import React from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";

const CommentTile = ({
  author,
  body,
  created_at,
  comment_id,
  votes,
  username,
  deleteCommentById,
  err
}) => {
  const { date, time } = formatDate(created_at);
  return (
    <li className="articleCommentTile">
      <p className="commentBody">{body}</p>
      <div className="incrementVotesComments">
        <IncrementVotes votes={votes} comment_id={comment_id} type="comment" />
      </div>
      <p className="commentInfo">
        Posted by {author} on {date} at {time}
        {username === author && (
          <span className="deleteCommentButtonSection">
            <button
              onClick={() => deleteCommentById(comment_id)}
              className="deleteCommentButton"
            >
              Delete comment
            </button>
            {err && <p>cannot delete comment</p>}
          </span>
        )}
      </p>
    </li>
  );
};

export default CommentTile;
