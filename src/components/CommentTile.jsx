import React from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { userStore } from "../stores/userinfo";
import * as api from "../api";
import { useForm } from "../hooks";

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
    editingComment: false,
  });
  const { date, time } = formatDate(created_at);

  return (
    <li>
      <form>
        <article>
          {form.editingComment ? (
            <textarea
              type="text"
              value={form.body}
              onChange={(e) => handleChange(e, "body")}
              required
            />
          ) : (
            <p>{form.body}</p>
          )}
        </article>

        <IncrementVotes
          votes={votes}
          id={comment_id}
          api={api.patchCommentById}
        />
        <p>
          Posted by {author} on {date} at {time}
        </p>
        {userStore.username === author && (
          <span>
            <button
              onClick={(e) => {
                e.preventDefault();
                return deleteCommentById(comment_id);
              }}
            >
              Delete comment
            </button>
            <button
              onClick={(e) => handleEditComment(e, form.body, comment_id)}
            >
              {form.editingComment ? "Update" : "Edit"}
            </button>
          </span>
        )}
      </form>
    </li>
  );
};

export default CommentTile;
