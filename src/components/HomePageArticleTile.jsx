import React from "react";
import { Link } from "@reach/router";

const HomePageArticleTile = ({
  title,
  votes,
  comment_count,
  body,
  article_id
}) => {
  return (
    <li className="homepageArticleTile">
      <Link
        to={`/articles/${article_id}`}
        className="homepageArticleTileHeader"
      >
        <h3>{title}</h3>
      </Link>
      <p className="homepageArticleTileBody">{body.slice(0, 100)} ...</p>
      <div className="homepageArticleTileInfo">
        <p className="homepageArticleTileComments">
          Comments: {comment_count} 💬
        </p>
        <p className="homepageArticleTileVotes">votes: {votes}</p>
      </div>
    </li>
  );
};

export default HomePageArticleTile;
