import React from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { userStore } from "../stores/userinfo";

const CommentTile = ({
  author,
  body,
  created_at,
  comment_id,
  votes,
  deleteCommentById,
  err,
  deleteComment_id,
}) => {
  const { date, time } = formatDate(created_at);
  return (
    <li className="articleCommentTile">
      <p className="commentBody">{body}</p>
      <div className="incrementVotesComments">
        <IncrementVotes votes={votes} comment_id={comment_id} />
      </div>
      <p className="commentInfo">
        Posted by {author} on {date} at {time}
        {userStore.username === author && (
          <span className="deleteCommentButtonSection">
            <button
              onClick={() => deleteCommentById(comment_id)}
              className="deleteCommentButton"
            >
              Delete comment
            </button>
            {err && comment_id === deleteComment_id && (
              <span>Oops! Couln't delete comment</span>
            )}
          </span>
        )}
      </p>
    </li>
  );
};

export default CommentTile;
