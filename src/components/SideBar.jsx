import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import { StyledSidebar } from "../styling/SideBar.styles";
import Spinner from "react-bootstrap/Spinner";
import { mainTheme } from "../styling/themes.styling";

class SideBar extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: false,
  };
  render() {
    const { topics, isLoading, err } = this.state;
    return (
      <StyledSidebar theme={mainTheme}>
        <h2 className="sideBarHeader">Topics</h2>
        {err ? (
          <p>Something went wrong!</p>
        ) : (
          <>
            {isLoading ? (
              <Spinner animation="border" className="spinner" />
            ) : (
              <nav>
                <ul className="sideBarNavList">
                  {topics.map((topic) => {
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
          </>
        )}
      </StyledSidebar>
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
        this.setState({
          err: "Oops, can't connect to the server!",
        });
      });
  };
}

export default SideBar;
