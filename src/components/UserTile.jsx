import React from "react";
import { Link } from "@reach/router";
import { useToggle } from "../hooks";
import { StyledLi } from "../styling/UserTile.styles";
import { formatDate, formatUserContributions, timeSince } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faAngleDown,
  faHeart,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Accordion from "react-bootstrap/Accordion";

const UserTile = ({
  article_id,
  title,
  body,
  topic,
  username,
  created_at,
  comment_count,
  votes,
  comment_id,
}) => {
  const [bodyToggle, handleBodyToggle] = useToggle();
  return (
    <StyledLi toggle={bodyToggle} article={topic ? true : false}>
      <Card>
        {topic ? (
          <Card.Header className="header">
            <FontAwesomeIcon icon={faBook} className="headerIcon" />
            <span className="capitalize">{username}</span> posted an article!
          </Card.Header>
        ) : (
          <Card.Header className="header">
            <FontAwesomeIcon icon={faCommentDots} className="headerIcon" />
            <span className="capitalize">{username}</span> commented on an
            article!
          </Card.Header>
        )}
        <Card.Body>
          <Link to={`/articles/${article_id}`} className="articleCommentTitle">
            <Card.Title>{title}</Card.Title>
          </Link>

          {/* <Card.Text>
              With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}
          <footer className="blockquote-footer">{timeSince(created_at)}</footer>
        </Card.Body>
        <Accordion>
          <Accordion.Toggle
            eventKey="0"
            className="toggle"
            onClick={handleBodyToggle}
          >
            <FontAwesomeIcon icon={faAngleDown} className="arrowIcon" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Text>{body}</Card.Text>
          </Accordion.Collapse>
        </Accordion>
        <Card.Footer className="text-muted footer">
          {comment_count && (
            <p className="comments">
              {comment_count}{" "}
              <FontAwesomeIcon icon={faCommentDots} className="footerIcon" />
            </p>
          )}
          <p className="votes">
            {votes}
            <FontAwesomeIcon icon={faHeart} className="footerIcon" />
          </p>
        </Card.Footer>
      </Card>
    </StyledLi>
  );
};

export default UserTile;
