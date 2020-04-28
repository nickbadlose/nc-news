import React, { Component } from "react";
import * as api from "../api";
import { userStore } from "../stores/userinfo";
import UserArticleTile from "./UserArticleTile";
import UserCommentTile from "./UserCommentTile";
import ErrorPage from "./ErrorPage";

class UserPage extends Component {
  state = {
    articles: [],
    comments: [],
    isLoading: true,
    err: null,
    toggleComments: false,
    toggleArticles: false,
  };
  render() {
    const { username } = this.props;
    const {
      articles,
      comments,
      isLoading,
      err,
      toggleArticles,
      toggleComments,
    } = this.state;
    return (
      <main>
        {err ? (
          <ErrorPage />
        ) : (
          <>
            <h2 className="articlesHeader">
              {userStore.username === username
                ? `Welcome ${username}`
                : `Profile - ${username}`}
            </h2>
            {isLoading ? (
              <p> Loading...</p>
            ) : (
              <>
                <h3>
                  {" "}
                  Total contributions - {articles.length + comments.length}
                </h3>
                <article>
                  {userStore.username === username ? (
                    <h3>Your Articles</h3>
                  ) : (
                    <h3>{username}'s Articles</h3>
                  )}
                  <ul>
                    {toggleArticles
                      ? articles.map((article) => {
                          return (
                            <UserArticleTile
                              {...article}
                              key={article.article_id}
                            />
                          );
                        })
                      : articles.slice(0, 3).map((article) => {
                          return (
                            <UserArticleTile
                              {...article}
                              key={article.article_id}
                            />
                          );
                        })}
                  </ul>
                  <button
                    onClick={(e) => this.handleClick(e, "toggleArticles")}
                  >
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
                      ? comments.map((comment) => {
                          return (
                            <UserCommentTile
                              {...comment}
                              key={comment.comment_id}
                            />
                          );
                        })
                      : comments.slice(0, 3).map((comment) => {
                          return (
                            <UserCommentTile
                              {...comment}
                              key={comment.comment_id}
                            />
                          );
                        })}
                  </ul>
                  <button
                    onClick={(e) => this.handleClick(e, "toggleComments")}
                  >
                    {toggleComments ? "Show less" : "Show all comments"}
                  </button>
                </article>
              </>
            )}
          </>
        )}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
    this.fetchComments();
  }

  fetchArticles = () => {
    api
      .getArticles(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        this.props.username
      )
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      });
  };

  fetchComments = () => {
    api.getComments(this.props.username).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  handleClick = (e, input) => {
    this.setState((currentState) => {
      return { [input]: !currentState[input] };
    });
  };
}

export default UserPage;
