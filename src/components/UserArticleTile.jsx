import React from "react";
import { Link } from "@reach/router";

const UserArticleTile = ({ article_id, title, body }) => {
  return (
    <div>
      <Link to={`/articles/${article_id}`} className="articleTileHeader">
        {title.length > 30 ? (
          <h3>{title.slice(0, 30)}...</h3>
        ) : (
          <h3>{title}</h3>
        )}
        {body.length > 30 ? (
          <p className="articleTileBody"> {body.slice(0, 30)}...</p>
        ) : (
          <p className="articleTileBody">{body}</p>
        )}
      </Link>
    </div>
  );
};

export default UserArticleTile;
