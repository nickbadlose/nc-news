import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";

const PostCommentForm = ({ article_id, dispatch }) => {
  const { form, handlePostComment, handleChange } = useForm(
    { body: "" },
    dispatch
  );
  return (
    <form onSubmit={(e) => handlePostComment(e, article_id)}>
      <label>
        <textarea
          placeholder={
            userStore.username
              ? "What are your thoughts?"
              : "Log in to post a comment"
          }
          type="text"
          value={form.body}
          onChange={(e) => handleChange(e, "body")}
          required
        />
        {}
        <button type="submit">
          {userStore.username ? "Comment" : "Log in to comment"}
        </button>
      </label>
    </form>
  );
};

export default PostCommentForm;
