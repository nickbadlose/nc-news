import React from "react";
import { Link } from "@reach/router";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { useToggle } from "../hooks";
import * as api from "../api";

const ArticleTile = ({
  author,
  title,
  votes,
  created_at,
  comment_count,
  body,
  topic,
  article_id,
}) => {
  const [toggle, handleToggle] = useToggle();
  const { date, time } = formatDate(created_at);
  return (
    <li>
      <Link to={`/articles/${article_id}`}>
        <h3>
          {title} - {topic}
        </h3>
      </Link>
      <p>
        Created by {author} on {date} at {time}
      </p>
      <p>
        {toggle || body.length < 101 ? body : body.slice(0, 100) + "..."}
        {body.length > 100 && (
          <button onClick={handleToggle}>
            {toggle ? "show less" : "show more"}
          </button>
        )}
      </p>
      <p>Comments: {comment_count} 💬</p>
      <IncrementVotes
        votes={votes}
        id={article_id}
        api={api.patchArticleById}
      />
    </li>
  );
};

export default ArticleTile;
