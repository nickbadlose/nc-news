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
    return (
      <main>
        <h2>Articles</h2>
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
    const {
      location: { search }
    } = this.props;

    if (prevProps.location.search !== search) {
      this.fetchArticles();
    }
  }

  fetchArticles = (sort_by, order) => {
    const {
      location: { search }
    } = this.props;
    const topic = search.slice(7);
    api
      .getArticles(sort_by, order, topic)
      .then(({ data: { articles } }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response }) => {
        // console.log(response.status, response.data.msg);
        this.setState({
          err: { status: response.status, msg: response.data.msg }
        });
      });
  };
}

export default TopicsArticles;
