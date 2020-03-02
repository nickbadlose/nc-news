import React, { Component } from "react";
import { Link } from "@reach/router";
import { formatDate } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import ToggleButton from "./ToggleButton";

class ArticleTile extends Component {
  state = {
    toggleBody: false
  };
  render() {
    const {
      author,
      title,
      votes,
      created_at,
      comment_count,
      body,
      topic,
      article_id
    } = this.props;
    const { toggleBody } = this.state;
    const { handleButtonChange } = this;
    const { date, time } = formatDate(created_at);
    return (
      <li className="ArticleTile">
        <Link to={`/articles/${article_id}`} className="articleTileHeader">
          <h3>
            {title} - {topic}
          </h3>
        </Link>
        <p className="articleTileInfo">
          Created by {author} on {date} at {time}
        </p>
        {toggleBody ? (
          <>
            <p className="articleTileBody">
              {body}
              <ToggleButton
                handleButtonChange={handleButtonChange}
                buttonText={toggleBody ? "show less" : "show more"}
              />
            </p>
          </>
        ) : (
          <p className="articleTileBody">
            {body.slice(0, 100)} ...
            <ToggleButton
              handleButtonChange={handleButtonChange}
              buttonText={toggleBody ? "show less" : "show more"}
            />
          </p>
        )}
        <p className="articleTileComments">Comments: {comment_count} 💬</p>
        <IncrementVotes votes={votes} article_id={article_id} type="article" />
      </li>
    );
  }

  handleButtonChange = () => {
    this.setState(currentState => {
      return { toggleBody: !currentState.toggleBody };
    });
  };
}

export default ArticleTile;
