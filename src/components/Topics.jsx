import React from "react";
import { Link } from "@reach/router";
import PostTopicForm from "./PostTopicForm.jsx";
import { useTopics } from "../hooks";

const Topics = () => {
  const { topics, isLoading } = useTopics();

  return (
    <main>
      <h2>Topics</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <PostTopicForm />
          <ul>
            {topics.map((topic) => {
              return (
                <Link to={`/topics/articles/${topic.slug}`} key={topic.slug}>
                  <li>
                    <h2>{topic.slug}</h2>
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
    </main>
  );
};

export default Topics;
