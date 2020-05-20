import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";

const PostTopicForm = () => {
  const { form, handleChange, handlePostTopic } = useForm({
    slug: "",
    description: "",
    invalidTopic: false,
  });

  return (
    <form onSubmit={handlePostTopic}>
      <label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => handleChange(e, "slug")}
          required
          maxLength="16"
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
          value={form.description}
          onChange={(e) => handleChange(e, "description")}
          required
        />
        {}
      </label>
      <button type="submit" disabled={!userStore.username}>
        {userStore.username ? "Post Topic" : "Log in to post a topic"}
      </button>
      {form.invalidTopic && <p>Topic already exists!</p>}
    </form>
  );
};

export default PostTopicForm;
