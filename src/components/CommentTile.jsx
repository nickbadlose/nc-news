import React from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { userStore } from "../stores/userinfo";
import * as api from "../api";
import { useForm, useToggle } from "../hooks";
import { StyledLi } from "../styling/CommentTile.styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@reach/router";

const CommentTile = ({
  body,
  author,
  created_at,
  comment_id,
  votes,
  deleteCommentById,
}) => {
  const { form, handleChange, handleEditComment } = useForm({
    body,
  });
  const [editingComment, handleEditingComment] = useToggle();
  const [deleteComment, handleDeleteComment] = useToggle();

  const { date, time } = formatDate(created_at);

  return (
    <StyledLi>
      <IncrementVotes
        votes={votes}
        id={comment_id}
        api={api.patchCommentById}
        className="articleTile"
      />
      <article className="commentMain">
        <p className="commentBody">{form.body}</p>
        <div className="commentInfo">
          <p className="commentAuthor">
            Posted by <Link to={`/${author}`}>{author}</Link> on {date} at{" "}
            {time}
          </p>
          <p className="commentAuthorShort">
            <Link to={`/${author}`}>{author}</Link> on {date}
          </p>
          {userStore.username === author && (
            <div className="editDeleteComment">
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
                  <Form.Group controlId="editCommentFormBodyInput">
                    <Form.Control
                      as="textarea"
                      value={form.body}
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
                      handleEditComment(e, form.body, comment_id);
                    }}
                  >
                    Save Edits
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleEditingComment}
                    size="sm"
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {!editingComment && (
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip">Edit Comment!</Tooltip>}
                >
                  <Button
                    type="submit"
                    size="sm"
                    onClick={handleEditingComment}
                  >
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="pencilIcon"
                    />
                  </Button>
                </OverlayTrigger>
              )}
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
                  Are you sure you want to delete this comment? This action
                  cannot be undone!
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
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="pencilIcon"
                      />
                    </Button>
                  </OverlayTrigger>
                  <Button
                    variant="secondary"
                    onClick={handleDeleteComment}
                    size="sm"
                  >
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
          )}
        </div>
      </article>
    </StyledLi>
  );
};

export default CommentTile;
