import React from "react";
import { Link } from "@reach/router";
import { useToggle } from "../hooks";
import { useImmerReducer, useImmer } from "use-immer";
import { StyledLi } from "../styling/UserTile.styles";
import { timeSince } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faAngleDown,
  faHeart,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import DeleteArticleForm from "./DeleteArticleForm";
import EditArticleForm from "./EditArticleForm";
import { userStore } from "../stores/userinfo";
import { errorStore } from "../stores/error";
import EditCommentForm from "./EditCommentForm";
import DeleteCommentForm from "./DeleteCommentForm";

const reducer = (state, action) => {
  switch (action.type) {
    // case "delete-comment":
    //   state.page = 1;
    //   state.sort_by = "created_at";
    //   state.order = undefined;
    //   state.article.comment_count--;
    //   return;
    case "delete-article":
      state.deletedArticle = true;
      return;
    case "editing-article":
      state.editingArticle = !state.editingArticle;
      return;
    case "update-article":
      state.body = action.body;
      state.editingArticle = false;
      return;
    case "err":
      errorStore.err = action.err;
      return;
    default:
      return state;
  }
};

const UserTile = ({
  article_id,
  title,
  body,
  topic,
  username,
  created_at,
  comment_count,
  votes,
  comment_id,
  isMounted,
}) => {
  const initialState = {
    body,
    editingArticle: false,
    deletedArticle: false,
    err: false,
  };
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const [bodyToggle, handleBodyToggle] = useToggle();
  return (
    !state.deletedArticle && (
      <StyledLi toggle={bodyToggle} article={topic ? true : false}>
        <Card>
          {topic ? (
            <Card.Header className="header">
              <FontAwesomeIcon icon={faBook} className="headerIcon" />
              <span className="capitalize">{username}</span> posted an article!
            </Card.Header>
          ) : (
            <Card.Header className="header">
              <FontAwesomeIcon icon={faCommentDots} className="headerIcon" />
              <span className="capitalize">{username}</span> commented on an
              article!
            </Card.Header>
          )}
          <Card.Body>
            <Link
              to={`/articles/${article_id}`}
              className="articleCommentTitle"
            >
              <Card.Title>{title}</Card.Title>
            </Link>
            <footer className="blockquote-footer">
              {timeSince(created_at)}
            </footer>
          </Card.Body>
          <Accordion>
            <Accordion.Toggle
              eventKey="0"
              className="toggle"
              onClick={handleBodyToggle}
            >
              <FontAwesomeIcon icon={faAngleDown} className="arrowIcon" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Text className="body">{state.body}</Card.Text>
            </Accordion.Collapse>
          </Accordion>
          <Card.Footer className="text-muted footer">
            <div className="articleCommentInfo">
              {comment_count && (
                <p className="comments">
                  {comment_count}{" "}
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="footerIcon"
                  />
                </p>
              )}
              <p className="votes">
                {votes}
                <FontAwesomeIcon icon={faHeart} className="footerIcon" />
              </p>
            </div>
            {userStore.username === username &&
              (topic ? (
                <div className="editDelete">
                  <EditArticleForm
                    dispatch={dispatch}
                    body={state.body}
                    article_id={article_id}
                    title={title}
                    editingArticle={state.editingArticle}
                  />

                  <DeleteArticleForm
                    article_id={article_id}
                    dispatch={dispatch}
                    isMounted={isMounted}
                    userPage={true}
                  />
                </div>
              ) : (
                <div className="editDeleteComment">
                  {/* <EditCommentForm
                  handleChange={handleChange}
                  handleEditComment={handleEditComment}
                  body={form.body}
                  comment_id={comment_id}
                />
                <DeleteCommentForm
                  deleteCommentById={deleteCommentById}
                  comment_id={comment_id}
                /> */}
                </div>
              ))}
          </Card.Footer>
        </Card>
      </StyledLi>
    )
  );
};

export default UserTile;
