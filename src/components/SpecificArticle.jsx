import React from "react";
import * as api from "../api";
import CommentTile from "./CommentTile";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import PostCommentForm from "./PostCommentForm";
import FilterForm from "./FilterForm";
import { userStore } from "../stores/userinfo";
import { navigate, Link } from "@reach/router";
import EditArticleForm from "./EditArticleForm";
import { errorStore } from "../stores/error";
import { useSpecificArticle, useScroll, useToggle } from "../hooks";
import { StyledMain } from "../styling/SpecificArticle.styles";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch-article":
      state.article = action.article;
      state.isLoading = false;
      state.maxPage = action.maxPage;
      return;
    case "fetch-comments":
      state.comments = action.comments;
      return;
    case "update-comments":
      state.comments = [...state.comments, ...action.comments];
      return;
    case "filter":
      state.page = 1;
      state.sort_by = action.sort_by;
      state.order = action.order;
      return;
    case "next-page":
      state.page++;
      return;
    case "reset":
      state.page = 1;
      state.sort_by = "created_at";
      state.order = undefined;
      return;
    case "post-comment":
      state.page = 1;
      state.sort_by = "created_at";
      state.order = undefined;
      state.article.comment_count++;
      return;
    case "delete-comment":
      state.page = 1;
      state.sort_by = "created_at";
      state.order = undefined;
      state.article.comment_count--;
      return;
    case "editing-article":
      state.editingArticle = !state.editingArticle;
      return;
    case "update-article":
      state.article.body = action.body;
      state.editingArticle = false;
      return;
    case "err":
      errorStore.err = action.err;
      return;
    default:
      return state;
  }
};

const initialState = {
  article: {},
  comments: [],
  page: 1,
  sort_by: undefined,
  order: undefined,
  maxPage: null,
  isLoading: true,
  editingArticle: false,
};

const SpecificArticle = ({ article_id }) => {
  const { state, isMounted, dispatch } = useSpecificArticle(
    article_id,
    reducer,
    initialState
  );
  useScroll(dispatch, state.page, state.maxPage, state.isLoading);
  const [deleteArticle, handleDeleteArticle] = useToggle();

  const { date, time } = formatDate(state.article.created_at);

  const deleteCommentById = (comment_id) => {
    const filteredComments = state.comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    api
      .removeCommentById(comment_id)
      .then(() => {
        if (isMounted.current) {
          dispatch({ type: "delete-comment" });
          dispatch({ type: "fetch-comments", comments: filteredComments });
        }
      })
      .catch(({ response }) => {
        dispatch({
          type: "err",
          err: {
            status: response.status,
            msg: response.data.msg,
          },
        });
      });
  };

  const deleteArticleById = () => {
    handleDeleteArticle();
    api
      .removeArticleById(article_id)
      .then(() => {
        if (isMounted.current) {
          navigate("/articles");
        }
      })
      .catch(({ response }) => {
        dispatch({
          type: "err",
          err: {
            status: response.status,
            msg: response.data.msg,
          },
        });
      });
  };

  return (
    <StyledMain>
      {state.isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <div className="main">
          <article className="titleBody">
            <h2 className="title">{state.article.title}</h2>
            <div>
              <p className="body">{state.article.body}</p>
            </div>
          </article>
          <div className="articleInfo">
            <div className="info">
              <p className="topic">
                <Link to={`/topics/articles/${state.article.topic}`}>
                  {state.article.topic}
                </Link>
              </p>
              <p className="author">
                Posted by{" "}
                <Link to={`/${state.article.author}`}>
                  {state.article.author}
                </Link>{" "}
                on {date} at {time}
              </p>
              <p className="authorShort">
                <Link to={`/${state.article.author}`}>
                  {state.article.author}
                </Link>
              </p>
              <p className="comments">
                <FontAwesomeIcon icon={faCommentAlt} className="commentIcon" />
                {+state.article.comment_count}
              </p>
            </div>
            <IncrementVotes
              votes={state.article.votes}
              id={state.article.article_id}
              api={api.patchArticleById}
              className="specificArticle"
            />
            {userStore.username === state.article.author && (
              <div className="editDelete">
                <Modal
                  show={state.editingArticle}
                  onHide={() => dispatch({ type: "editing-article" })}
                  aria-labelledby="example-custom-modal-styling-title"
                  dialogClassName="modal-90w"
                >
                  <EditArticleForm
                    dispatch={dispatch}
                    body={state.article.body}
                    article_id={article_id}
                    title={state.article.title}
                  />
                </Modal>
                {!state.editingArticle && (
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Edit Article!</Tooltip>}
                  >
                    <Button
                      type="submit"
                      size="sm"
                      onClick={() => dispatch({ type: "editing-article" })}
                    >
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="pencilIcon"
                      />
                    </Button>
                  </OverlayTrigger>
                )}
                <Modal
                  show={deleteArticle}
                  onHide={handleDeleteArticle}
                  centered
                  aria-labelledby="contained-modal-title-vcenter"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Your Article?!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to delete this article? This action
                    cannot be undone!
                  </Modal.Body>
                  <Modal.Footer>
                    <OverlayTrigger
                      overlay={<Tooltip id="tooltip">Delete Article!</Tooltip>}
                    >
                      <Button
                        type="submit"
                        variant="danger"
                        size="sm"
                        onClick={deleteArticleById}
                      >
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="pencilIcon"
                        />
                      </Button>
                    </OverlayTrigger>
                    <Button
                      variant="secondary"
                      onClick={handleDeleteArticle}
                      size="sm"
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                {!deleteArticle && (
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Delete Article!</Tooltip>}
                  >
                    <Button
                      type="submit"
                      variant="danger"
                      size="sm"
                      onClick={handleDeleteArticle}
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="pencilIcon"
                      />
                    </Button>
                  </OverlayTrigger>
                )}
              </div>
            )}
          </div>
          <PostCommentForm
            article_id={state.article.article_id}
            dispatch={dispatch}
          />
          <section className="commentSection">
            <FilterForm dispatch={dispatch} article={false} />
            <ul>
              {state.comments.map((comment) => {
                return (
                  <CommentTile
                    {...comment}
                    deleteCommentById={deleteCommentById}
                    key={comment.comment_id}
                  />
                );
              })}
            </ul>
            {state.page < state.maxPage && (
              <Spinner animation="border" className="smallMarginSpinner" />
            )}
          </section>
        </div>
      )}
    </StyledMain>
  );
};

export default SpecificArticle;
