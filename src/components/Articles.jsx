import React, { Component } from "react";
import ArticleTile from "./ArticleTile";
import * as api from "../api";
import FilterForm from "./FilterForm";
import throttle from "lodash.throttle";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    page: 1,
    sort_by: null,
    order: null,
    loadingMoreArticles: false,
    maxPage: null
  };
  render() {
    const { articles, isLoading, loadingMoreArticles } = this.state;
    const { fetchArticles } = this;
    return (
      <main>
        <h2 className="articlesHeader">Articles</h2>
        <FilterForm fetchArticles={fetchArticles} article={true} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <article>
            <ul>
              {articles.map(article => {
                return <ArticleTile {...article} key={article.article_id} />;
              })}
            </ul>
            {loadingMoreArticles && <p>Loading more articles...</p>}
          </article>
        )}
      </main>
    );
  }

  componentDidMount() {
    const { page } = this.state;

    this.fetchArticles(undefined, undefined, undefined, undefined, page);

    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, sort_by, order } = this.state;
    if (prevState.page !== page) {
      this.updateArticles(sort_by, order, undefined, undefined, page);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle(e => {
    const { page, maxPage } = this.state;
    if (maxPage !== page) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        this.setState(currentState => {
          const newPage = currentState.page + 1;
          return { page: newPage, loadingMoreArticles: true };
        });
      }
    }
  }, 2000);

  fetchArticles = (sort_by, order, topic, limit, p) => {
    api.getArticles(sort_by, order, topic, limit, p).then(({ data }) => {
      const maxPage = Math.round(data.total_count / 10);
      this.setState({
        articles: data.articles,
        isLoading: false,
        sort_by,
        order,
        maxPage
      });
    });
  };

  updateArticles = (sort_by, order, topic, limit, p) => {
    api
      .getArticles(sort_by, order, topic, limit, p)
      .then(({ data: { articles } }) => {
        this.setState(currentState => {
          return {
            articles: [...currentState.articles, ...articles],
            loadingMoreArticles: false
          };
        });
      });
  };
}

export default Articles;
