import React from "react";
import { Link } from "@reach/router";
import { formatDate, formatFontSize } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { useToggle } from "../hooks";
import * as api from "../api";
import { StyledLi, StyledLiCard } from "../styling/ArticleTile.styles";
import { mainTheme } from "../styling/themes.styling";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentDots,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { layoutStore } from "../stores/layout";

const ArticleTile = ({
  author,
  title,
  votes,
  created_at,
  comment_count,
  body,
  topic,
  article_id,
  images,
  topicLayout,
  searchLayout,
  index,
}) => {
  const [toggle, handleToggle] = useToggle();
  const { date } = formatDate(created_at);
  const fontSize = formatFontSize(title);

  if (layoutStore.layout === "list" || searchLayout) {
    return (
      <StyledLi
        theme={mainTheme}
        fontSize={fontSize}
        searchLayout={searchLayout}
      >
        <IncrementVotes
          votes={votes}
          id={article_id}
          api={api.patchArticleById}
          className="articleTile"
          article={true}
        />
        {images && (
          <div className="topicImage">
            <Link to={`/articles/${article_id}`}>
              <img src={images.image_thumb} alt={topic} />
            </Link>
          </div>
        )}
        <div className="main">
          <div className="titleBody">
            <Link to={`/articles/${article_id}`}>
              <h4 className="title">{title.toLowerCase()}</h4>
            </Link>
            <Link to={`/articles/${article_id}`}>
              <h4 className="titleMobile">{title.toLowerCase()}</h4>
            </Link>
            <p className="body">{body}</p>
            <Link to={`/articles/${article_id}`} tabIndex="-1">
              <div className="textFader"></div>
            </Link>
          </div>
          <div className="articleInfo">
            <p className="author">
              By <Link to={`/${author}`}>{author}</Link> on {date}
            </p>
            <p className="shortAuthor">
              <Link to={`/${author}`}>{author}</Link>
            </p>
            <div className="topicComments">
              <p className="topic">
                <Link to={`/topics/articles/${topic}`}>{topic}</Link>
              </p>
              <p className="comments">
                {comment_count} comments{" "}
                <FontAwesomeIcon icon={faCommentDots} className="commentIcon" />
              </p>
              <p className="shortComments">
                {comment_count}{" "}
                <FontAwesomeIcon icon={faCommentDots} className="commentIcon" />
              </p>
            </div>
          </div>
        </div>
      </StyledLi>
    );
  } else {
    return (
      <StyledLiCard
        theme={mainTheme}
        toggle={toggle}
        topicLayout={topicLayout}
        index={index}
      >
        <Card className="card">
          {images && (
            <Link to={`/articles/${article_id}`}>
              <Card.Img
                className="image"
                variant="top"
                src={images.image_card}
                alt={topic}
              />
            </Link>
          )}
          <Card.Body className="titleBody">
            <Card.Title className="title">
              <Link to={`/articles/${article_id}`}>{title.toLowerCase()}</Link>
            </Card.Title>
            <hr></hr>
            <Accordion>
              <Accordion.Toggle
                eventKey="0"
                className="toggle"
                onClick={handleToggle}
              >
                <FontAwesomeIcon icon={faAngleDown} className="angleIcon" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Text>{body}</Card.Text>
              </Accordion.Collapse>
            </Accordion>
            <Link to={`/articles/${article_id}`}>
              <div className="textFader"></div>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted topicAuthor">
            <Link to={`/${author}`} className="author">
              {author}
            </Link>
            {!topicLayout && (
              <Link to={`/topics/articles/${topic}`} className="topic">
                {topic}
              </Link>
            )}
            <p className="comments">
              {comment_count}{" "}
              <FontAwesomeIcon icon={faCommentDots} className="commentIcon" />
            </p>
            <p className="votes">
              {votes}
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </p>
          </Card.Footer>
        </Card>
      </StyledLiCard>
    );
  }
};

export default ArticleTile;
