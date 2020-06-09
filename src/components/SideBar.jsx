import React from "react";
import { Link } from "@reach/router";
import { StyledSidebar } from "../styling/SideBar.styles";
import Spinner from "react-bootstrap/Spinner";
import { useTopicsSideBar } from "../hooks";
import { observer } from "mobx-react";

const SideBar = observer(() => {
  const { topics, isLoading } = useTopicsSideBar();

  return (
    <StyledSidebar>
      <h2>Topics</h2>
      {isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <nav>
          <ul>
            {topics.map((topic) => {
              return (
                <Link to={`/topics/articles/${topic.slug}`} key={topic.slug}>
                  <li>
                    {topic.slug.length > 10
                      ? topic.slug.slice(0, 10) + "..."
                      : topic.slug}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
    </StyledSidebar>
  );
});

export default SideBar;
