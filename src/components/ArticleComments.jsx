import React from "react";
import CommentTile from "./CommentTile";

const ArticleComments = ({
  comments,
  deleteCommentById,
  err,
  deleteComment_id,
  errorHandler,
}) => {
  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <CommentTile
                {...comment}
                deleteCommentById={deleteCommentById}
                key={comment.comment_id}
                err={err}
                deleteComment_id={deleteComment_id}
                errorHandler={errorHandler}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleComments;
