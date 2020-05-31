import React from "react";
import FilterForm from "./FilterForm";
import ArticleTile from "./ArticleTile";
import { Link } from "@reach/router";
import { useArticles, useScroll } from "../hooks";
import { StyledMain } from "../styling/TopicsArticles.styles";

const TopicsArticles = ({ topic }) => {
  const { state, dispatch } = useArticles(topic);
  useScroll(dispatch, state.page, state.maxPage, state.isLoading);

  return (
    <StyledMain>
      <h2>Articles - {topic}</h2>
      <Link to={`/topics/articles/${topic}/post`}>
        <button>Post an article about this topic?</button>
      </Link>
      <FilterForm dispatch={dispatch} article={true} />
      {state.isLoading || state.isLoadingImages ? (
        <p>Loading...</p>
      ) : (
        <article>
          <img
            src={state.images[topic]}
            alt={topic}
            width="100%"
            height="10%"
          />
          <ul>
            {state.articles.map((article) => {
              return <ArticleTile {...article} key={article.article_id} />;
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
    </StyledMain>
  );
};

export default TopicsArticles;
