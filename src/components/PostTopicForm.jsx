import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm, useToggle } from "../hooks";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import { StyledDiv } from "../styling/PostTopicForm.styles";

const PostTopicForm = () => {
  const [postingTopic, handlePostingTopic] = useToggle();
  const { form, handleChange, handlePostTopic } = useForm(
    {
      slug: "",
      description: "",
      validTopic: false,
      validated: false,
      invalidFormat: false,
    },
    handlePostingTopic
  );

  return (
    <StyledDiv>
      <Modal
        show={postingTopic}
        onHide={handlePostingTopic}
        aria-labelledby="modal-posting-topic"
        dialogClassName="modal-90w"
      >
        <Form validated={form.validated} onSubmit={handlePostTopic}>
          <Modal.Header closeButton>
            <Modal.Title>What would you like to discuss?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="topicSlugForm">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                onChange={(e) => handleChange(e, "slug")}
                value={form.slug}
                maxLength="12"
                isInvalid={form.invalidTopic}
              />
              {form.invalidFormat ? (
                <Form.Control.Feedback type="invalid">
                  Topic title must not contain spaces!
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Topic already exists!
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="toppicDescriptionForm">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={form.body}
                onChange={(e) => handleChange(e, "description")}
                required
                type="text"
                maxLength="55"
                placeholder="Description"
                className="descriptionForm"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary" size="sm">
              Post Topic
            </Button>
            <Button variant="secondary" onClick={handlePostingTopic} size="sm">
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {!postingTopic &&
        (userStore.username ? (
          <Button type="submit" size="sm" onClick={handlePostingTopic}>
            Post Topic
          </Button>
        ) : (
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">Log in to post a topic!</Tooltip>
            }
          >
            <span className="d-inline-block">
              <Button
                variant="primary"
                disabled
                style={{ pointerEvents: "none" }}
                size="sm"
              >
                Post Topic
              </Button>
            </span>
          </OverlayTrigger>
        ))}
    </StyledDiv>
  );
};

export default PostTopicForm;
