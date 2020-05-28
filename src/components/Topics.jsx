import React from "react";
import { Link } from "@reach/router";
import PostTopicForm from "./PostTopicForm.jsx";
import { useTopics, useToggle } from "../hooks";
import { StyledMain } from "../styling/Topics.styles";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Topics = () => {
  const { topics, isLoading } = useTopics();

  return (
    <StyledMain>
      <div className="createLine">
        <div className="headerPostTopic">
          <h2>Topics</h2>
          <PostTopicForm />
        </div>
      </div>
      {isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <div>
          <ul>
            {topics.map((topic) => {
              return (
                <Link to={`/topics/articles/${topic.slug}`} key={topic.slug}>
                  <li>
                    <h4>{topic.slug}</h4>
                    <p>{topic.description}</p>
                    {+topic.article_count === 1 ? (
                      <p>{topic.article_count} article!</p>
                    ) : (
                      <p>{topic.article_count} articles!</p>
                    )}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </StyledMain>
  );
};

export default Topics;
