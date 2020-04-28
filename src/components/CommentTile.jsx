import React, { Component } from "react";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { userStore } from "../stores/userinfo";
import * as api from "../api";

class CommentTile extends Component {
  state = {
    editingComment: false,
    body: this.props.body,
  };
  render() {
    const {
      author,
      created_at,
      comment_id,
      votes,
      deleteCommentById,
      err,
      deleteComment_id,
    } = this.props;
    const { editComment, handleChange } = this;
    const { editingComment, body } = this.state;
    const { date, time } = formatDate(created_at);
    return (
      <li className="articleCommentTile">
        {/* <p className="commentBody">{body}</p> */}

        <form>
          <article className="commentBody">
            {editingComment ? (
              <label>
                <textarea
                  className="postCommentBody"
                  type="text"
                  value={body}
                  onChange={(e) => handleChange(e, "body")}
                  required
                />
              </label>
            ) : (
              <p>
                {body}
                {/* {userStore.username === author && (
                <button onClick={editComment}>
                {editingComment ? "Update" : "Edit"}
                Edit{" "}
                </button>
              )} */}
              </p>
            )}
          </article>

          <div className="incrementVotesComments">
            <IncrementVotes votes={votes} comment_id={comment_id} />
          </div>
          <p className="commentInfo">
            Posted by {author} on {date} at {time}
            {userStore.username === author && (
              <span className="deleteCommentButtonSection">
                <button
                  onClick={() => deleteCommentById(comment_id)}
                  className="deleteCommentButton"
                >
                  Delete comment
                </button>
                {err && comment_id === deleteComment_id && (
                  <span>Oops! Couln't delete comment</span>
                )}
                <button
                  onClick={(e) => editComment(e, body)}
                  className="deleteCommentButton"
                >
                  {editingComment ? "Update" : "Edit"}
                </button>
              </span>
            )}
          </p>
        </form>
      </li>
    );
  }

  handleChange = (e, input) => {
    this.setState({ [input]: e.target.value });
  };

  editComment = (e, newBody) => {
    e.preventDefault();
    const { editingComment } = this.state;
    if (!editingComment) {
      this.setState({ editingComment: !editingComment });
    } else {
      api
        .patchCommentById(this.props.comment_id, undefined, newBody)
        .then(({ body }) => {
          this.setState({ body, editingComment: !editingComment });
        })
        .catch((err) => {
          this.props.errorHandler(err);
        });
    }
  };
}

export default CommentTile;
