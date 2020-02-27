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
    <li>
      <p>
        Author: {author} / Created: {`${date}: ${time}`}
      </p>
      <p>{body}</p>
      <IncrementVotes votes={votes} comment_id={comment_id} type="comment" />
      <p>
        {username === author && (
          <span>
            <button onClick={() => deleteCommentById(comment_id)}>
              Delete
            </button>
            {err && <>cannot delete comment</>}
          </span>
        )}
      </p>
    </li>
  );
};

export default CommentTile;
