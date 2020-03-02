import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    const { topics, isLoading } = this.state;
    return (
      <>
        <h2 className="topicsHeader">Topics</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul className="topics">
              {topics.map(topic => {
                return (
                  <Link
                    to={`/topics/articles/${topic.slug}`}
                    key={topic.slug}
                    className="topicLink"
                  >
                    <li className="topicTile">
                      <h2>{topic.slug}</h2>
                      <p className="topicDescription">{topic.description}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(({ data: { topics } }) => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default Topics;
