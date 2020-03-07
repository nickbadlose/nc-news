import React, { Component } from "react";
import * as api from "../api";
import ArticleComments from "./ArticleComments";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import PostCommentForm from "./PostCommentForm";
import FilterForm from "./FilterForm";
// import ErrorMessage from "./ErrorMessage";
import ToggleButton from "./ToggleButton";
import ErrorPage from "./ErrorPage";

class SpecificArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    toggleComments: false,
    commentChange: null,
    // postErr: null,
    deleteErr: null,
    deleteComment_id: null,
    err: null
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
      // postErr,
      deleteErr,
      err,
      deleteComment_id
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
                    {/* {postErr && (
                      <div className="postCommentErrorMsg">
                        <ErrorMessage err={postErr} />
                      </div>
                    )} */}
                    <div className="commentsToggle">
                      <ToggleButton
                        handleButtonChange={handleButtonChange}
                        buttonText={`Comments: ${+comment_count +
                          commentChange}`}
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
  }

  fetchArticleById = article_id => {
    api.getArticleById(article_id).then(({ data: { article } }) => {
      this.setState({ ...article, isLoading: false });
    });
  };

  fetchCommentsByArticleId = (
    article_id,
    sort_by,
    order,
    postedBoolean = false
  ) => {
    api
      .getCommentsByArticleId(article_id, sort_by, order)
      .then(({ data: { comments } }) => {
        this.setState(currentState => {
          return {
            comments,
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
