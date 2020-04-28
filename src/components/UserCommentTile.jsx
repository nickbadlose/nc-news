import React from "react";
import { Link } from "@reach/router";

const UserCommentTile = ({ article_id, body, votes }) => {
  return (
    <div>
      <Link to={`/articles/${article_id}`} className="articleTileHeader">
        {body.length > 30 ? (
          <p className="articleTileBody"> {body.slice(0, 30)}...</p>
        ) : (
          <p className="articleTileBody">{body}</p>
        )}{" "}
        <p>Votes {votes}</p>
      </Link>
    </div>
  );
};

export default UserCommentTile;
