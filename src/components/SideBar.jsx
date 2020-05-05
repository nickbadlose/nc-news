import React from "react";
import { Link } from "@reach/router";
import { StyledSidebar } from "../styling/SideBar.styles";
import Spinner from "react-bootstrap/Spinner";
import { mainTheme } from "../styling/themes.styling";
import { useTopics } from "../hooks";

const SideBar = () => {
  const { topics, isLoading } = useTopics();

  return (
    <StyledSidebar theme={mainTheme}>
      <h2>Topics</h2>
      {isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <nav>
          <ul>
            {topics.map((topic) => {
              return (
                <Link to={`/topics/articles/${topic.slug}`} key={topic.slug}>
                  <li>{topic.slug}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
    </StyledSidebar>
  );
};

export default SideBar;
