import React, { Component } from "react";
import * as api from "../api";
import ArticleComments from "./ArticleComments";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import PostCommentForm from "./PostCommentForm";
import FilterForm from "./FilterForm";
import ToggleButton from "./ToggleButton";
import ErrorPage from "./ErrorPage";
import throttle from "lodash.throttle";

class SpecificArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    toggleComments: false,
    commentChange: null,
    deleteErr: null,
    deleteComment_id: null,
    err: null,
    page: 1,
    sort_by: null,
    order: null,
    maxPage: null
  };
  render() {
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
      article_id,
      isLoading,
      toggleComments,
      comments,
      commentChange,
      deleteErr,
      err,
      deleteComment_id,
      page,
      maxPage
    } = this.state;
    const {
      handleButtonChange,
      fetchCommentsByArticleId,
      errorHandler,
      deleteCommentById
    } = this;
    const { username } = this.props;
    const { date, time } = formatDate(created_at);
    return (
      <main className="SpecificArticle">
        {err ? (
          <ErrorPage err={err} />
        ) : (
          <>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <h3 className="specificArticleHeader">
                  {title} - {topic}
                </h3>
                <article className="specificArticleBody">
                  <p>{body}</p>
                </article>
                <div className="specificArticleInfo">
                  <div className="specificArticleInformation">
                    Created by {author} on {date} at {time}
                  </div>
                  <IncrementVotes
                    votes={votes}
                    article_id={article_id}
                    type="article"
                  />
                </div>
                <div className="specificArticleComments">
                  <div className="postCommentAndToggle">
                    <PostCommentForm
                      username={username}
                      article_id={article_id}
                      fetchCommentsByArticleId={fetchCommentsByArticleId}
                      errorHandler={errorHandler}
                    />
                    <div className="commentsToggle">
                      <ToggleButton
                        handleButtonChange={handleButtonChange}
                        buttonText={
                          toggleComments
                            ? `Hide comments: ${+comment_count + commentChange}`
                            : `Show comments: ${+comment_count + commentChange}`
                        }
                      />
                    </div>
                  </div>
                  {toggleComments && (
                    <section className="commentsSection">
                      <div className="FilterFormComments">
                        <FilterForm
                          fetchCommentsByArticleId={fetchCommentsByArticleId}
                          article_id={article_id}
                          article={false}
                        />
                      </div>
                      <div className="ArticleComments">
                        <ArticleComments
                          comments={comments}
                          deleteCommentById={deleteCommentById}
                          username={username}
                          err={deleteErr}
                          deleteComment_id={deleteComment_id}
                        />
                        {page < maxPage && <p>Loading more comments...</p>}
                      </div>
                    </section>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchArticleById(article_id);
    this.fetchCommentsByArticleId(article_id);

    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, sort_by, order } = this.state;
    const { article_id } = this.props;
    if (prevState.page !== page && page !== 1) {
      this.updateCommentsByArticleId(article_id, sort_by, order, page);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle(e => {
    const { page, maxPage, toggleComments, isLoading } = this.state;
    if (maxPage !== page && toggleComments && !isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        this.setState(currentState => {
          const newPage = currentState.page + 1;
          return { page: newPage };
        });
      }
    }
  }, 2000);

  fetchArticleById = article_id => {
    api.getArticleById(article_id).then(({ data: { article } }) => {
      const maxPage = Math.ceil(article.comment_count / 10);
      this.setState({ ...article, isLoading: false, maxPage });
    });
  };

  fetchCommentsByArticleId = (
    article_id,
    sort_by,
    order,
    postedBoolean = false
  ) => {
    api
      .getCommentsByArticleId(article_id, sort_by, order, 1)
      .then(({ data: { comments } }) => {
        this.setState(currentState => {
          return {
            comments,
            sort_by,
            order,
            page: 1,
            isLoading: false,
            commentChange: postedBoolean && ++currentState.commentChange
          };
        });
      })
      .catch(({ response }) => {
        this.setState({
          err: { status: response.status, msg: response.data.msg }
        });
      });
  };

  updateCommentsByArticleId = (article_id, sort_by, order, p) => {
    api
      .getCommentsByArticleId(article_id, sort_by, order, p)
      .then(({ data: { comments } }) => {
        this.setState(currentState => {
          return {
            comments: [...currentState.comments, ...comments]
          };
        });
      });
  };

  handleButtonChange = () => {
    this.setState(currentState => {
      return { toggleComments: !currentState.toggleComments };
    });
  };

  deleteCommentById = comment_id => {
    const { comments } = this.state;
    const initialComments = comments;
    const filteredComments = comments.filter(
      comment => comment.comment_id !== comment_id
    );
    this.setState(currentState => ({
      comments: filteredComments,
      commentChange: --currentState.commentChange,
      deleteErr: null
    }));
    api.removeCommentById(comment_id).catch(() => {
      this.setState(currentState => ({
        comments: initialComments,
        deleteErr: true,
        commentChange: ++currentState.commentChange,
        deleteComment_id: comment_id
      }));
    });
  };

  errorHandler = ({ status, data: { msg } }) => {
    this.setState({
      err: { status: status, msg: msg }
    });
  };
}

export default SpecificArticle;
