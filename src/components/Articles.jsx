import React from "react";
import ArticleTile from "./ArticleTile";
import FilterForm from "./FilterForm";
import { useArticles, useScroll } from "../hooks";
import { StyledMain } from "../styling/Articles.styles";
import { mainTheme } from "../styling/themes.styling";
import Spinner from "react-bootstrap/Spinner";

const Articles = () => {
  const { state, dispatch } = useArticles();
  useScroll(dispatch, state.page, state.maxPage, state.isLoading, true);

  return (
    <StyledMain theme={mainTheme}>
      <div className="headerFilter">
        <h2>Articles</h2>
        <FilterForm
          article={true}
          dispatch={dispatch}
          sort_by={state.sort_by}
          order={state.order}
        />
      </div>
      <hr />
      {state.isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <article>
          <ul>
            {state.articles.map((article) => {
              return <ArticleTile {...article} key={article.article_id} />;
            })}
          </ul>
          {state.page < state.maxPage && (
            <Spinner animation="border" className="smallMarginSpinner" />
          )}
        </article>
      )}
    </StyledMain>
  );
};

export default Articles;
