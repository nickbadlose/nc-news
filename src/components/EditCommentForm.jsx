import React from "react";
import { useToggle } from "../hooks";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { StyledDiv } from "../styling/EditArticleForm.styles";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const EditCommentForm = ({
  handleChange,
  handleEditComment,
  body,
  comment_id,
}) => {
  const [editingComment, handleEditingComment] = useToggle();

  return (
    <StyledDiv>
      <Modal
        show={editingComment}
        onHide={handleEditingComment}
        aria-labelledby="modal-editing-comment"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit your comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            controlId="editCommentFormBodyInput"
            className="editCommentFormGroup"
          >
            <Form.Control
              as="textarea"
              value={body}
              onChange={(e) => handleChange(e, "body")}
              required
              className="editCommentInput"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            onClick={(e) => {
              handleEditingComment();
              handleEditComment(e, body, comment_id);
            }}
          >
            Save Edits
          </Button>
          <Button variant="secondary" onClick={handleEditingComment} size="sm">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {!editingComment && (
        <OverlayTrigger overlay={<Tooltip id="tooltip">Edit Comment!</Tooltip>}>
          <Button type="submit" size="sm" onClick={handleEditingComment}>
            <FontAwesomeIcon icon={faPencilAlt} className="pencilIcon" />
          </Button>
        </OverlayTrigger>
      )}
    </StyledDiv>
  );
};

export default EditCommentForm;
