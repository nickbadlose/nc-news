import React from "react";
import ArticleTile from "./ArticleTile";
import FilterForm from "./FilterForm";
import { useArticles, useScroll } from "../hooks";

const Articles = () => {
  const { state, dispatch } = useArticles();
  useScroll(dispatch, state.page, state.maxPage, state.isLoading, true);

  return (
    <main>
      <h2>Articles</h2>
      <FilterForm
        article={true}
        dispatch={dispatch}
        sort_by={state.sort_by}
        order={state.order}
      />
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <article>
          <ul>
            {state.articles.map((article) => {
              return <ArticleTile {...article} key={article.article_id} />;
            })}
          </ul>
          {state.page < state.maxPage && <p>Loading more articles...</p>}
        </article>
      )}
    </main>
  );
};

export default Articles;
