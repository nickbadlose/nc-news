import React from "react";
import ArticleTile from "./ArticleTile";
import FilterForm from "./FilterForm";
import { useArticles, useScroll } from "../hooks";
import { StyledMain } from "../styling/Articles.styles";
import Spinner from "react-bootstrap/Spinner";
import Layout from "./Layout";
import { observer } from "mobx-react";
import { layoutStore } from "../stores/layout";

const Articles = observer(() => {
  const { state, dispatch } = useArticles();
  useScroll(dispatch, state.page, state.maxPage, state.isLoading, true);

  return (
    <StyledMain layout={layoutStore.layout}>
      <div className="createLine">
        <div className="headerFilter">
          <h2>Articles</h2>
          <div className="filters">
            <Layout />
            <FilterForm
              article={true}
              dispatch={dispatch}
              className="articles"
            />
          </div>
        </div>
      </div>
      {state.isLoading || state.isLoadingImages ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <article className="centerTile">
          <ul>
            {state.articles.map((article) => {
              return (
                <ArticleTile
                  {...article}
                  key={article.article_id}
                  images={state.images[article.topic]}
                />
              );
            })}
          </ul>
          {state.page < state.maxPage && (
            <Spinner animation="border" className="smallMarginSpinner" />
          )}
        </article>
      )}
    </StyledMain>
  );
});

export default Articles;
