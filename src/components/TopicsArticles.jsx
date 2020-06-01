import React from "react";
import FilterForm from "./FilterForm";
import ArticleTile from "./ArticleTile";
import { Link } from "@reach/router";
import { useArticles, useScroll } from "../hooks";
import { StyledMain } from "../styling/TopicsArticles.styles";
import Layout from "./Layout";
import { observer } from "mobx-react";
import { layoutStore } from "../stores/layout";
import Spinner from "react-bootstrap/Spinner";
import PostArticleForm from "./PostArticleForm";

const TopicsArticles = observer(({ topic }) => {
  const { state, dispatch } = useArticles(topic);
  useScroll(dispatch, state.page, state.maxPage, state.isLoading);

  return (
    <StyledMain layout={layoutStore.layout}>
      {state.isLoading || state.isLoadingImages ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <article>
          <img
            src={state.images[topic].image_banner}
            alt={topic}
            className="bannerImage"
          />
          <div className="createLine">
            <div className="headerFilter">
              <h2>{topic.toLowerCase()}</h2>
              <div className="filtersPostArticle">
                <PostArticleForm topic={topic} />
                <Layout />
                <FilterForm
                  article={true}
                  dispatch={dispatch}
                  className="articles"
                />
              </div>
            </div>
          </div>
          <div className="main">
            <div className="topicInfo"></div>
            <div className="centerTile">
              <ul>
                {state.articles.map((article) => {
                  return <ArticleTile {...article} key={article.article_id} />;
                })}
              </ul>
              {!state.articles.length && (
                <p className="noArticles">
                  There are currently no articles about{" "}
                  <span className="capitalize">{topic}</span>, be the first to
                  post one!
                </p>
              )}
              {state.page < state.maxPage && (
                <Spinner animation="border" className="smallMarginSpinner" />
              )}
            </div>
          </div>
        </article>
      )}
    </StyledMain>
  );
});

export default TopicsArticles;
