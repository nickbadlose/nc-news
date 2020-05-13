import React from "react";
import { useForm } from "../hooks";

const EditArticleForm = ({ dispatch, body, article_id }) => {
  const { form, handleEditArticle, handleChange } = useForm({ body }, dispatch);
  return (
    <form onSubmit={(e) => handleEditArticle(e, article_id)}>
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
