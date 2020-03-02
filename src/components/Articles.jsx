import React, { Component } from "react";
import ArticleTile from "./ArticleTile";
import * as api from "../api";
import FilterForm from "./FilterForm";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  render() {
    const { articles, isLoading } = this.state;
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
          </article>
        )}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = (sort_by, order) => {
    api.getArticles(sort_by, order).then(({ data: { articles } }) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
