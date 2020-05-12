import React from "react";
import * as api from "../api";
import CommentTile from "./CommentTile";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import PostCommentForm from "./PostCommentForm";
import FilterForm from "./FilterForm";
import { userStore } from "../stores/userinfo";
import { navigate } from "@reach/router";
import EditArticleForm from "./EditArticleForm";
import { errorStore } from "../stores/error";
import { useToggle, useArticleCommentsScroll } from "../hooks";

// refactor with mobx and hooks using commented out articles hook as an example. will help for comments so we don't have to pass them down

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
      state.editingArticle = !state.editingArticle;
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
  const { toggle, handleToggle } = useToggle();
  const { state, isMounted, dispatch } = useArticleCommentsScroll(
    article_id,
    toggle,
    reducer,
    initialState
  );

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

  const editArticle = (newBody) => {
    if (!state.editingArticle) {
      dispatch({ type: "editing-article" });
    } else {
      api
        .patchArticleById(article_id, undefined, newBody)
        .then(({ body }) => {
          if (isMounted.current) {
            dispatch({ type: "update-article", body });
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
    }
  };

  const handleChange = (e) => {
    const [sort_by, order] = e.target.value.split("/");
    dispatch({
      type: "filter",
      sort_by,
      order,
    });
  };

  return (
    <main>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>
            {state.article.title} - {state.article.topic}
          </h3>
          <article>
            {state.editingArticle ? (
              <EditArticleForm
                editArticle={editArticle}
                body={state.article.body}
              />
            ) : (
              <p>
                {state.article.body}
                {userStore.username === state.article.author && (
                  <button onClick={editArticle}>Edit</button>
                )}
              </p>
            )}
          </article>
          Created by {state.article.author} on {date} at {time}
          {userStore.username === state.article.author && (
            <button onClick={deleteArticleById}>Delete article</button>
          )}
          <IncrementVotes
            votes={state.article.votes}
            id={state.article.article_id}
            api={api.patchArticleById}
          />
          <PostCommentForm
            article_id={state.article.article_id}
            dispatch={dispatch}
          />
          <button onClick={handleToggle}>
            {toggle
              ? `Hide comments: ${+state.article.comment_count}`
              : `Show comments: ${+state.article.comment_count}`}
          </button>
          {toggle && (
            <section>
              <FilterForm
                handleChange={handleChange}
                sort_by={state.sort_by}
                order={state.order}
                article={false}
              />
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
              {state.page < state.maxPage && <p>Loading more comments...</p>}
            </section>
          )}
        </div>
      )}
    </main>
  );
};

export default SpecificArticle;
