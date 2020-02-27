import React from "react";
import CommentTile from "./CommentTile";

const ArticleComments = ({
  comments,
  deleteCommentById,
  username,
  err,
  errorHandler
}) => {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <CommentTile
              {...comment}
              deleteCommentById={deleteCommentById}
              key={comment.comment_id}
              username={username}
              err={err}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleComments;
