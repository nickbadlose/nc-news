import React from "react";
import { useForm } from "../hooks";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { StyledForm, StyledDiv } from "../styling/EditArticleForm.styles";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const EditArticleForm = ({
  dispatch,
  body,
  article_id,
  title,
  editingArticle,
}) => {
  const { form, handleEditArticle, handleChange } = useForm({ body }, dispatch);
  return (
    <StyledDiv>
      <Modal
        show={editingArticle}
        onHide={() => dispatch({ type: "editing-article" })}
        aria-labelledby="modal-editing-article"
        dialogClassName="modal-90w"
      >
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
      </Modal>
      {!editingArticle && (
        <OverlayTrigger overlay={<Tooltip id="tooltip">Edit Article!</Tooltip>}>
          <Button
            type="submit"
            size="sm"
            onClick={() => dispatch({ type: "editing-article" })}
          >
            <FontAwesomeIcon icon={faPencilAlt} className="pencilIcon" />
          </Button>
        </OverlayTrigger>
      )}
    </StyledDiv>
  );
};

export default EditArticleForm;
