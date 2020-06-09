import React from "react";
import { useToggle } from "../hooks";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { observer } from "mobx-react";

const DeleteCommentForm = observer(({ deleteCommentById, comment_id }) => {
  const [deleteComment, handleDeleteComment] = useToggle();
  return (
    <div>
      <Modal
        show={deleteComment}
        onHide={handleDeleteComment}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Your Comment?!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this comment? This action cannot be
          undone!
        </Modal.Body>
        <Modal.Footer>
          <OverlayTrigger
            overlay={<Tooltip id="tooltip">Delete Comment!</Tooltip>}
          >
            <Button
              type="submit"
              variant="danger"
              size="sm"
              onClick={() => deleteCommentById(comment_id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} className="pencilIcon" />
            </Button>
          </OverlayTrigger>
          <Button variant="secondary" onClick={handleDeleteComment} size="sm">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {!deleteComment && (
        <OverlayTrigger
          overlay={<Tooltip id="tooltip">Delete Comment!</Tooltip>}
        >
          <Button
            type="submit"
            variant="danger"
            size="sm"
            onClick={handleDeleteComment}
          >
            <FontAwesomeIcon icon={faTrashAlt} className="pencilIcon" />
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
});

export default DeleteCommentForm;
