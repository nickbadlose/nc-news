import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class SideBar extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    const { topics, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <nav>
            <ul>
              {topics.map(topic => {
                return (
                  <li key={topic.slug}>
                    <Link to={`/articles?topic=${topic.slug}`}>
                      {topic.slug}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
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

export default SideBar;
