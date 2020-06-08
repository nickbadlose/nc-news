import React from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { userStore } from "../stores/userinfo";
import * as api from "../api";
import { useForm } from "../hooks";
import { StyledLi } from "../styling/CommentTile.styles";
import { Link } from "@reach/router";
import EditCommentForm from "./EditCommentForm";
import DeleteCommentForm from "./DeleteCommentForm";

const CommentTile = ({
  body,
  author,
  created_at,
  comment_id,
  votes,
  deleteCommentById,
}) => {
  const { form, handleChange, handleEditComment } = useForm({
    body,
  });

  const { date, time } = formatDate(created_at);

  return (
    <StyledLi>
      <IncrementVotes
        votes={votes}
        id={comment_id}
        api={api.patchCommentById}
        className="articleTile"
        article={true}
      />
      <article className="commentMain">
        <p className="commentBody">{form.body}</p>
        <div className="commentInfo">
          <p className="commentAuthor numbers">
            Posted by <Link to={`/${author}`}>{author}</Link> on {date} at{" "}
            {time}
          </p>
          <p className="commentAuthorShort numbers">
            <Link to={`/${author}`}>{author}</Link> on {date}
          </p>
          {userStore.username === author && (
            <div className="editDeleteComment">
              <EditCommentForm
                handleChange={handleChange}
                handleEditComment={handleEditComment}
                body={form.body}
                comment_id={comment_id}
              />
              <DeleteCommentForm
                deleteCommentById={deleteCommentById}
                comment_id={comment_id}
              />
            </div>
          )}
        </div>
      </article>
    </StyledLi>
  );
};

export default CommentTile;
