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
    maxPage: null
  };
  render() {
    const { articles, isLoading, page, maxPage } = this.state;
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
            {page < maxPage && <p>Loading more articles...</p>}
          </article>
        )}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, sort_by, order } = this.state;
    if (prevState.page !== page && page !== 1) {
      this.updateArticles(sort_by, order, undefined, undefined, page);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle(e => {
    const { page, maxPage, isLoading } = this.state;
    if (maxPage !== page && !isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        this.setState(currentState => {
          const newPage = currentState.page + 1;
          return { page: newPage };
        });
      }
    }
  }, 2000);

  fetchArticles = (sort_by, order, topic, limit) => {
    api.getArticles(sort_by, order, topic, limit, 1).then(({ data }) => {
      const maxPage = Math.ceil(data.total_count / 10);

      this.setState({
        articles: data.articles,
        isLoading: false,
        sort_by,
        order,
        page: 1,
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
            articles: [...currentState.articles, ...articles]
          };
        });
      });
  };
}

export default Articles;
