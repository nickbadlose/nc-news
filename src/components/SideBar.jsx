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
        <h2 className="sideBarHeader">Topics</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <nav>
            <ul className="sideBarNavList">
              {topics.map(topic => {
                return (
                  <Link
                    to={`/topics/articles/${topic.slug}`}
                    className="sideBarLink"
                    key={topic.slug}
                  >
                    <li className="sideBarLi">{topic.slug}</li>
                  </Link>
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
