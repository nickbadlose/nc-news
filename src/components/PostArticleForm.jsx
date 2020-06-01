import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm, useToggle } from "../hooks";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import { StyledDiv } from "../styling/PostArticleForm.styles";

const PostArticleForm = ({ topic }) => {
  const [postingArticle, handlePostingArticle] = useToggle();
  const { form, handleChange, handlePostArticle } = useForm({
    body: "",
    title: "",
  });

  return (
    <StyledDiv>
      <Modal
        show={postingArticle}
        onHide={handlePostingArticle}
        aria-labelledby="modal-posting-topic"
        dialogClassName="modal-90w"
      >
        <Form
          validated={form.validated}
          onSubmit={(e) => handlePostArticle(e, topic)}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              What would you like to write about {topic}?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="articleTitleForm">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={form.title}
                onChange={(e) => handleChange(e, "title")}
                required
                maxLength="80"
                placeholder="Article title"
              />
            </Form.Group>
            <Form.Group
              controlId="articleBodyForm"
              className="articleBodyFormGroup"
            >
              <Form.Label>Article</Form.Label>
              <Form.Control
                as="textarea"
                className="articleBodyForm"
                placeholder={
                  userStore.username ? `Article` : "Log in to post an article"
                }
                type="text"
                value={form.body}
                onChange={(e) => handleChange(e, "body")}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary" size="sm">
              Post Article
            </Button>
            <Button
              variant="secondary"
              onClick={handlePostingArticle}
              size="sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {!postingArticle &&
        (userStore.username ? (
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Post an article about this topic!
              </Tooltip>
            }
          >
            <Button
              type="submit"
              size="sm"
              onClick={handlePostingArticle}
              className="postArticleButton"
            >
              Post
            </Button>
          </OverlayTrigger>
        ) : (
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Log in to post an article!
              </Tooltip>
            }
          >
            <span className="d-inline-block">
              <Button
                variant="primary"
                disabled
                style={{ pointerEvents: "none" }}
                size="sm"
                className="postArticleButton"
              >
                Post
              </Button>
            </span>
          </OverlayTrigger>
        ))}
    </StyledDiv>
    // <form onSubmit={(e) => handlePostArticle(e, topic)}>
    //   <label>
    //     <input
    //       type="text"
    //       value={form.title}
    //       onChange={(e) => handleChange(e, "title")}
    //       required
    //       maxLength="80"
    //       placeholder="Article title?"
    //     />
    //   </label>
    //   <label>
    //     <textarea
    //       placeholder={
    //         userStore.username
    //           ? `What are your thoughts on ${topic}?`
    //           : "Log in to post an article"
    //       }
    //       type="text"
    //       value={form.body}
    //       onChange={(e) => handleChange(e, "body")}
    //       required
    //     />
    //     {}
    //     <div>
    //       <button type="submit" disabled={!userStore.username}>
    //         {userStore.username ? "Post Article" : "Log in to post an article"}
    //       </button>
    //     </div>
    //   </label>
    // </form>
  );
};

export default PostArticleForm;
