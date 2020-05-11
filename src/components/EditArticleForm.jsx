import React from "react";
import { useForm } from "../hooks";

const EditArticleForm = ({ editArticle, body }) => {
  const { form, handleEditArticle, handleChange } = useForm(
    { body },
    editArticle
  );
  return (
    <form onSubmit={handleEditArticle}>
      <label>
        <textarea
          type="text"
          value={form.body}
          onChange={(e) => handleChange(e, "body")}
          required
        />
      </label>
      <button>update</button>
    </form>
  );
};

export default EditArticleForm;
