import React from "react";
import { useForm } from "../hooks";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const EditArticleForm = ({ dispatch, body, article_id, title }) => {
  const { form, handleEditArticle, handleChange } = useForm({ body }, dispatch);
  return (
    <form onSubmit={(e) => handleEditArticle(e, article_id)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          type="text"
          value={form.body}
          onChange={(e) => handleChange(e, "body")}
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary" size="sm">
          Save Edits
        </Button>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "editing-article" })}
          size="sm"
        >
          Close
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default EditArticleForm;
