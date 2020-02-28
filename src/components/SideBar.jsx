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
      <div className="SideBar">
        <h2>Topics</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <nav>
            <ul>
              {topics.map(topic => {
                return (
                  <li key={topic.slug}>
                    <Link
                      to={`/topics/articles/${topic.slug}`}
                      className="Link"
                    >
                      {topic.slug}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
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
