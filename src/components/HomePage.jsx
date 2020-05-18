import React, { useEffect, useRef, useState } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import { errorStore } from "../stores/error";

const HomePage = () => {
  const [state, setState] = useState({
    articles: [],
    topics: [],
    isLoading: true,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    Promise.all([
      api.getArticles("votes", "desc", undefined, undefined, 3),
      api.getTopics(),
    ])
      .then(
        ([
          {
            data: { articles },
          },
          {
            data: { topics },
          },
        ]) => {
          isMounted.current && setState({ articles, topics, isLoading: false });
        }
      )
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  }, [setState]);

  return (
    <main>
      <h2>Popular Articles</h2>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {state.articles.map((article) => {
            return (
              <li key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <p>{article.body.slice(0, 100)} ...</p>
                <div>
                  <p>Comments: {article.comment_count} 💬</p>
                  <p>votes: {article.votes}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <h2>Hot Topics!</h2>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {state.topics.slice(0, 3).map((topic) => {
            return (
              <Link to={`/topics/articles/${topic.slug}`} key={topic.slug}>
                <li>
                  <h2>{topic.slug}</h2>
                  <p>{topic.description}</p>
                  <p>{topic.article_count} articles!</p>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default HomePage;
