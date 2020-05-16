import React from "react";
import { Link } from "@reach/router";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { useToggle } from "../hooks";
import * as api from "../api";
import { StyledLi } from "../styling/ArticleTile.styles";
import { mainTheme } from "../styling/themes.styling";

const ArticleTile = ({
  author,
  title,
  votes,
  created_at,
  comment_count,
  body,
  topic,
  article_id,
}) => {
  const [toggle, handleToggle] = useToggle();
  const { date, time } = formatDate(created_at);
  return (
    <StyledLi theme={mainTheme}>
      <IncrementVotes
        votes={votes}
        id={article_id}
        api={api.patchArticleById}
      />
      <div className="main">
        <div className="articleInfo">
          {/* <div className="topicUser"> */}
          <p className="topic">
            <Link to={`/topics/articles/${topic}`}>{topic}</Link>
          </p>
          {/* </div> */}
          <p className="comments">Comments: {comment_count} 💬</p>
        </div>
        <Link to={`/articles/${article_id}`}>
          <h3 className="title">{title}</h3>
        </Link>
        <p className="body">
          {toggle || body.length < 101 ? body : body.slice(0, 100) + "..."}
          {body.length > 100 && (
            <button onClick={handleToggle}>
              {toggle ? "show less" : "show more"}
            </button>
          )}
        </p>
        <p className="author">
          Created by <Link to={`/${author}`}>{author}</Link> on {date} at {time}
        </p>
      </div>
    </StyledLi>
  );
};

export default ArticleTile;
