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
  image,
}) => {
  const [toggle, handleToggle] = useToggle();
  const { date } = formatDate(created_at);
  return (
    <StyledLi theme={mainTheme}>
      <IncrementVotes
        votes={votes}
        id={article_id}
        api={api.patchArticleById}
      />
      {image && (
        <div className="topicImage">
          <img src={image} alt={topic} />
        </div>
      )}
      <div className="main">
        <div className="titleBody">
          <Link to={`/articles/${article_id}`}>
            <h4 className="title">{title}</h4>
          </Link>
          <p className="body">
            {body}
            {/* {toggle || body.length < 101 ? body : body.slice(0, 100) + "..."} */}
            {/* {body.length > 100 && (
            <button onClick={handleToggle}>
              {toggle ? "show less" : "show more"}
            </button>
          )} */}
          </p>
          <div className="textFader"></div>
        </div>
        <div className="articleInfo">
          <p className="author">
            By <Link to={`/${author}`}>{author}</Link> on {date}
          </p>
          <div className="topicComments">
            <p className="topic">
              <Link to={`/topics/articles/${topic}`}>{topic}</Link>
            </p>
            <p className="comments">Comments: {comment_count} 💬</p>
          </div>
        </div>
      </div>
    </StyledLi>
  );
};

export default ArticleTile;
