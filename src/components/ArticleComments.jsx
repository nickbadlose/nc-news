import React from "react";
import CommentTile from "./CommentTile";

const ArticleComments = ({
  comments,
  deleteCommentById,
  username,
  err,
  deleteComment_id
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
                deleteComment_id={deleteComment_id}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleComments;
