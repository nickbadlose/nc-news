import React from "react";
import FilterForm from "./FilterForm";
import ArticleTile from "./ArticleTile";
import PostArticleForm from "./PostArticleForm";
import { useArticles, useScroll } from "../hooks";
import { StyledMain } from "../styling/TopicsArticles.styles";
import Layout from "./Layout";
import { observer } from "mobx-react";
import { layoutStore } from "../stores/layout";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getTopContributors } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@reach/router";
import { darkStore } from "../stores/darkMode";

const TopicsArticles = observer(({ topic }) => {
  const { state, dispatch } = useArticles(topic);
  useScroll(dispatch, state.page, state.maxPage, state.isLoading);
  const topContributors = getTopContributors(state.articles);

  return (
    <StyledMain layout={layoutStore.layout}>
      {state.isLoading || state.isLoadingImages ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <article>
          <img
            src={state.images[topic].image_banner}
            srcSet={`${state.images[topic].image_banner} 1300w, ${state.images[topic].mobile_banner} 600w`}
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
          <div className="mainTopic">
            <div className="topicInfo">
              <Card className="info" bg={darkStore.darkMode ? "dark" : "light"}>
                <Card.Header>
                  <Card.Title className="capitalize">{topic}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{state.descriptions[topic]}</Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="topContributors"
                bg={darkStore.darkMode ? "dark" : "light"}
              >
                <Card.Header>
                  <Card.Title>Top Contributors</Card.Title>
                </Card.Header>
                <ListGroup variant="flush">
                  {topContributors.map((contributor) => {
                    return (
                      <ListGroup.Item
                        className="contributor"
                        key={contributor.author}
                      >
                        {" "}
                        <img src={contributor.avatar_url} alt="Avatar" />{" "}
                        <Link to={`/${contributor.author}`}>
                          {contributor.author}
                        </Link>{" "}
                        <footer className="blockquote-footer numbers">
                          <FontAwesomeIcon
                            icon={faBook}
                            className="articleIcon"
                          />{" "}
                          {contributor.articles === 1
                            ? "1 article!"
                            : `${contributor.articles} articles!`}
                        </footer>{" "}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Card>
            </div>
            <div className="centerTile">
              <ul>
                {state.articles.map((article) => {
                  return (
                    <ArticleTile
                      {...article}
                      key={article.article_id}
                      topicLayout={true}
                    />
                  );
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
