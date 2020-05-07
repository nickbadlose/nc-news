import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";

const PostTopicForm = () => {
  const {
    form: { slug, description },
    handleChange,
    handleSubmit,
  } = useForm({ slug: "", description: "" });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={slug}
          onChange={(e) => handleChange(e, "slug")}
          required
          placeholder="What should we discuss?"
        />
      </label>
      <label>
        <textarea
          placeholder={
            userStore.username
              ? `Describe your topic of conversation?`
              : "Log in to post a topic"
          }
          type="text"
          value={description}
          onChange={(e) => handleChange(e, "description")}
          required
        />
        {}
        <div>
          <button type="submit" disabled={!userStore.username}>
            {userStore.username ? "Post Topic" : "Log in to post a topic"}
          </button>
        </div>
      </label>
    </form>
  );
};

export default PostTopicForm;
