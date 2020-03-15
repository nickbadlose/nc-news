import React, { Component } from "react";
import * as api from "../api";
import HomePageArticleTile from "./HomePageArticleTile";

class HomePage extends Component {
  state = {
    isLoading: true,
    highestRatedArticles: []
  };

  render() {
    const { isLoading, highestRatedArticles } = this.state;
    return (
      <main>
        <h2>Home Page</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {highestRatedArticles.map(article => {
              return (
                <HomePageArticleTile {...article} key={article.article_id} />
              );
            })}
          </ul>
        )}
      </main>
    );
  }

  componentDidMount() {
    const { fetchArticles } = this;
    fetchArticles("votes", "desc", null, 3);
  }

  fetchArticles = (sort_by, order, topic = null, limit = null) => {
    api
      .getArticles(sort_by, order, topic, limit)
      .then(({ data: { articles } }) => {
        this.setState({ isLoading: false, highestRatedArticles: articles });
      });
  };
}

export default HomePage;
