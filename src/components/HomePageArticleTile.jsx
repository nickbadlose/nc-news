import React from "react";
import { Link } from "@reach/router";

const HomePageArticleTile = ({
  title,
  votes,
  comment_count,
  body,
  topic,
  article_id
}) => {
  return (
    <Link to={`/articles/${article_id}`} className="articleTileHeader">
      <li className="ArticleTile">
        <h3>
          {title} - {topic}
        </h3>
        <p className="articleTileBody">{body.slice(0, 100)} ...</p>
        <p className="articleTileComments">Comments: {comment_count} 💬</p>
        <p>votes: {votes}</p>
      </li>
    </Link>
  );
};

export default HomePageArticleTile;
