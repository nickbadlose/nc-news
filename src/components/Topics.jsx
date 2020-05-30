import React from "react";
import { Link } from "@reach/router";
import PostTopicForm from "./PostTopicForm.jsx";
import { useTopics, useToggle } from "../hooks";
import { StyledMain, StyledLi } from "../styling/Topics.styles";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Topics = () => {
  const { topics, isLoading } = useTopics();
  console.log(topics);
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
        <div className="centerTiles">
          <ul>
            {topics.map((topic) => {
              return (
                <StyledLi key={topic.slug}>
                  <Link to={`/topics/articles/${topic.slug}`}>
                    <img src={topic.image_thumb} alt={topic.slug + " image"} />
                    <div className="topicInfo">
                      <h4>{topic.slug}</h4>
                      <p>{topic.description}</p>
                      {+topic.article_count === 1 ? (
                        <p>
                          <FontAwesomeIcon icon={faBook} className="bookIcon" />{" "}
                          {topic.article_count} article!
                        </p>
                      ) : (
                        <p>
                          <FontAwesomeIcon icon={faBook} className="bookIcon" />{" "}
                          {topic.article_count} articles!
                        </p>
                      )}
                    </div>
                  </Link>
                </StyledLi>
              );
            })}
          </ul>
        </div>
      )}
    </StyledMain>
  );
};

export default Topics;
