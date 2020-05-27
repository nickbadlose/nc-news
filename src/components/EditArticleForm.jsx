import React from "react";
import { useForm } from "../hooks";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { StyledForm } from "../styling/EditArticleForm.styles";
import Form from "react-bootstrap/Form";

const EditArticleForm = ({ dispatch, body, article_id, title }) => {
  const { form, handleEditArticle, handleChange } = useForm({ body }, dispatch);
  return (
    <StyledForm onSubmit={(e) => handleEditArticle(e, article_id)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="editArticleFormBodyInput">
          <Form.Control
            as="textarea"
            value={form.body}
            onChange={(e) => handleChange(e, "body")}
            required
            className="articleInput"
          />
        </Form.Group>
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
    </StyledForm>
  );
};

export default EditArticleForm;
