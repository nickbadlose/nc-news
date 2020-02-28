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
      <li>
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>
          Author: {author} / Topic: {topic}
        </p>
        {toggleBody ? <p>{body}</p> : <p>{body.slice(0, 100)}...</p>}
        <ToggleButton
          handleButtonChange={handleButtonChange}
          buttonText={toggleBody ? "show less" : "show more"}
        />
        <p>Comments: {comment_count}</p>
        <p>Created: {`${date}: ${time}`}</p>
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
