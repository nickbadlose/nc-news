import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";

const PostArticleForm = ({ topic }) => {
  const { form, handleChange, handlePostArticle } = useForm({
    body: "",
    title: "",
  });

  return (
    <form onSubmit={(e) => handlePostArticle(e, topic)}>
      <label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => handleChange(e, "title")}
          required
          maxLength="60"
          placeholder="Article title?"
        />
      </label>
      <label>
        <textarea
          placeholder={
            userStore.username
              ? `What are your thoughts on ${topic}?`
              : "Log in to post an article"
          }
          type="text"
          value={form.body}
          onChange={(e) => handleChange(e, "body")}
          required
        />
        {}
        <div>
          <button type="submit" disabled={!userStore.username}>
            {userStore.username ? "Post Article" : "Log in to post an article"}
          </button>
        </div>
      </label>
    </form>
  );
};

export default PostArticleForm;
