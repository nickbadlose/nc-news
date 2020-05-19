import React from "react";
import FilterForm from "./FilterForm";
import ArticleTile from "./ArticleTile";
import { Link } from "@reach/router";
import { useArticles, useScroll } from "../hooks";

const TopicsArticles = ({ topic }) => {
  const { state, dispatch } = useArticles(topic);
  useScroll(dispatch, state.page, state.maxPage, state.isLoading, true);

  return (
    <main>
      <h2>Articles - {topic}</h2>
      <Link to={`/topics/articles/${topic}/post`}>
        <button>Post an article about this topic?</button>
      </Link>
      <FilterForm dispatch={dispatch} article={true} />
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <article>
          <ul>
            {state.articles.map((article) => {
              return (
                <ArticleTile
                  {...article}
                  key={article.article_id}
                  image={state.images[article.topic]}
                />
              );
            })}
          </ul>
          {!state.articles.length && (
            <p>
              There's currently no articles about {topic} be the first to post
              one!
            </p>
          )}
          {state.page < state.maxPage && <p>Loading more articles...</p>}
        </article>
      )}
    </main>
  );
};

export default TopicsArticles;
