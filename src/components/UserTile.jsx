import React from "react";
import { Link } from "@reach/router";
import { StyledLi } from "../styling/UserTile.styles";
import { formatDate, formatUserContributions } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faQuestionCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const UserTile = ({ article_id, title, body, topic, username }) => {
  return (
    <StyledLi>
      <Card>
        {topic ? (
          <Card.Header>{username} posted an article!</Card.Header>
        ) : (
          <Card.Header>{username} commented on an article!</Card.Header>
        )}
        <Card.Body>
          {/* <blockquote className="blockquote mb-0"> */}

          <Link to={`/articles/${article_id}`} className="articleTileHeader">
            <Card.Title>{title}</Card.Title>
          </Link>
          {/* <Card.Text>
              With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{" "}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
          {/* </blockquote> */}
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </StyledLi>
  );
};

export default UserTile;
