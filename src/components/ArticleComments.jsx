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
            <div key={comment.comment_id}>
              <CommentTile
                {...comment}
                deleteCommentById={deleteCommentById}
                key={comment.comment_id}
                username={username}
                err={err}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleComments;
