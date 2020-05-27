import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Tooltip from "react-bootstrap/Tooltip";
import { StyledForm } from "../styling/PostCommentForm.styles";

const PostCommentForm = ({ article_id, dispatch }) => {
  const { form, handlePostComment, handleChange } = useForm(
    { body: "" },
    dispatch
  );
  return (
    <StyledForm onSubmit={(e) => handlePostComment(e, article_id)}>
      <Form.Control
        placeholder={
          userStore.username
            ? "What are your thoughts?"
            : "Log in to post a comment"
        }
        as="textarea"
        value={form.body}
        onChange={(e) => handleChange(e, "body")}
        required
        className="commentInput"
      />
      <div className="button">
        {userStore.username ? (
          <Button
            variant="primary"
            type="submit"
            size="sm"
            className="commentButton"
          >
            Comment
          </Button>
        ) : (
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">Log in to post a comment!</Tooltip>
            }
          >
            <span className="d-inline-block">
              <Button
                variant="primary"
                disabled
                style={{ pointerEvents: "none" }}
                size="sm"
                className="commentButton"
              >
                Comment
              </Button>
            </span>
          </OverlayTrigger>
        )}
      </div>
    </StyledForm>
  );
};

export default PostCommentForm;
