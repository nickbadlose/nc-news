import React from "react";
import CommentTile from "./CommentTile";

const ArticleComments = ({ comments, deleteCommentById }) => {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <CommentTile
              {...comment}
              deleteCommentById={deleteCommentById}
              key={comment.comment_id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleComments;
