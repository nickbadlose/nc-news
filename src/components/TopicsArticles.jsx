import React, { Component } from "react";
import FilterForm from "./FilterForm";
import ArticleTile from "./ArticleTile";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

class TopicsArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };
  render() {
    const { articles, isLoading, err } = this.state;
    const { fetchArticles } = this;
    const { topic } = this.props;
    return (
      <main>
        <h2>Articles - {topic}</h2>
        {err ? (
          <ErrorPage err={err} />
        ) : (
          <>
            <FilterForm fetchArticles={fetchArticles} article={true} />
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <article>
                <ul>
                  {articles.map(article => {
                    return (
                      <ArticleTile {...article} key={article.article_id} />
                    );
                  })}
                </ul>
              </article>
            )}{" "}
          </>
        )}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;

    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = (sort_by, order) => {
    const { topic } = this.props;
    api
      .getArticles(sort_by, order, topic)
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          err: { status: response.status, msg: response.data.msg }
        });
      });
  };
}

export default TopicsArticles;
