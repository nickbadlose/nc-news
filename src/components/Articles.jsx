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
      <img
        src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        alt="cheesey"
        width="400px"
        height="400px"
      />
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
