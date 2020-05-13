import React, { useEffect, useRef } from "react";
import * as api from "../api";
import { userStore } from "../stores/userinfo";
import UserArticleTile from "./UserArticleTile";
import UserCommentTile from "./UserCommentTile";
import { useImmer } from "use-immer";
import { errorStore } from "../stores/error";
import { useToggle } from "../hooks";

const UserPage = ({ username }) => {
  const isMounted = useRef(true);
  const [state, setState] = useImmer({
    articles: [],
    comments: [],
    isLoading: true,
  });
  const [toggleComments, handleCommentsToggle] = useToggle();
  const [toggleArticles, handleArticlesToggle] = useToggle();

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    Promise.all([
      api.getArticles(
        undefined,
        undefined,
        undefined,
        undefined,
        100,
        username
      ),
      api.getComments(username),
    ])
      .then(([{ data }, comments]) => {
        if (isMounted.current) {
          setState((current) => {
            current.comments = comments;
            current.articles = data.articles;
            current.isLoading = false;
          });
        }
      })
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  }, [username, setState]);

  return (
    <main>
      <h2>
        {userStore.username === username
          ? `Welcome ${username}`
          : `Profile - ${username}`}
      </h2>
      {state.isLoading ? (
        <p> Loading...</p>
      ) : (
        <>
          <h3>
            {" "}
            Total contributions -{" "}
            {state.articles.length + state.comments.length}
          </h3>
          <article>
            {userStore.username === username ? (
              <h3>Your Articles</h3>
            ) : (
              <h3>{username}'s Articles</h3>
            )}
            <ul>
              {toggleArticles
                ? state.articles.map((article) => {
                    return (
                      <UserArticleTile {...article} key={article.article_id} />
                    );
                  })
                : state.articles.slice(0, 3).map((article) => {
                    return (
                      <UserArticleTile {...article} key={article.article_id} />
                    );
                  })}
            </ul>
            <button onClick={(e) => handleArticlesToggle(e, "toggleArticles")}>
              {toggleArticles ? "Show less" : "Show all articles"}
            </button>
          </article>
          <article>
            {userStore.username === username ? (
              <h3>Your Comments</h3>
            ) : (
              <h3>{username}'s Comments</h3>
            )}
            <ul>
              {toggleComments
                ? state.comments.map((comment) => {
                    return (
                      <UserCommentTile {...comment} key={comment.comment_id} />
                    );
                  })
                : state.comments.slice(0, 3).map((comment) => {
                    return (
                      <UserCommentTile {...comment} key={comment.comment_id} />
                    );
                  })}
            </ul>
            <button onClick={(e) => handleCommentsToggle(e, "toggleComments")}>
              {toggleComments ? "Show less" : "Show all comments"}
            </button>
          </article>
        </>
      )}
    </main>
  );
};

export default UserPage;
