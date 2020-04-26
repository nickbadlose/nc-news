import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: false,
  };
  render() {
    const { topics, isLoading, err } = this.state;
    return (
      <>
        {err ? (
          <ErrorPage />
        ) : (
          <>
            <h2 className="topicsHeader">Topics</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <ul className="topics">
                  {topics.map((topic) => {
                    return (
                      <Link
                        to={`/topics/articles/${topic.slug}`}
                        key={topic.slug}
                        className="topicLink"
                      >
                        <li className="topicTile">
                          <h2>{topic.slug}</h2>
                          <p className="topicDescription">
                            {topic.description}
                          </p>
                          <p>{topic.article_count} articles!</p>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            )}
          </>
        )}
      </>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api
      .getTopics()
      .then(({ data: { topics } }) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: true });
      });
  };
}

export default Topics;
