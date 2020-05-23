import React from "react";
import ArticleTile from "./ArticleTile";
import FilterForm from "./FilterForm";
import { useArticles, useScroll } from "../hooks";
import { StyledMain } from "../styling/Articles.styles";
import Spinner from "react-bootstrap/Spinner";

const Articles = () => {
  const { state, dispatch } = useArticles();
  useScroll(dispatch, state.page, state.maxPage, state.isLoading, true);

  return (
    <StyledMain>
      <div className="createLine">
        <div className="headerFilter">
          <h2>Articles</h2>
          <FilterForm article={true} dispatch={dispatch} className="articles" />
        </div>
      </div>
      {state.isLoading || state.isLoadingImages ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <article
          style={{
            display: "flex", // remove this for none card stylying
            flexDirection: "column",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap", // remove this for non card styling
              justifyContent: "flex-start",
              // alignItems: "center",
              width: "calc(100% + 1rem)",
              alignSelf: "center",
            }}
          >
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
};

export default Articles;
