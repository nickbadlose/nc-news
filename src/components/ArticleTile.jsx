import React from "react";
import { Link } from "@reach/router";
import { formatDate } from "../utils/utils";

const ArticleTile = ({
  author,
  title,
  votes,
  created_at,
  comment_count,
  article_id
}) => {
  const { date, time } = formatDate(created_at);
  return (
    <li>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Author: {author}</p>
      <p>Comments: {comment_count}</p>
      <p>Created: {`${date}: ${time}`}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};

export default ArticleTile;
