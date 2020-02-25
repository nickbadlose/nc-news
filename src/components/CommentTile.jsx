import React from "react";
import { formatDate } from "../utils/utils";

const CommentTile = ({ author, body, created_at, votes }) => {
  const { date, time } = formatDate(created_at);
  return (
    <li>
      <p>
        Author: {author} / Created: {`${date}: ${time}`}
      </p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};

export default CommentTile;
