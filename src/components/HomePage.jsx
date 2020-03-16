import React, { Component } from "react";
import * as api from "../api";
import HomePageArticleTile from "./HomePageArticleTile";

class HomePage extends Component {
  state = {
    isLoading: true,
    highestRatedArticles: [],
    codingArticles: [],
    footballArticles: [],
    cookingArticles: []
  };

  render() {
    const {
      isLoading,
      highestRatedArticles,
      codingArticles,
      footballArticles,
      cookingArticles
    } = this.state;
    return (
      <main>
        <h2 className="articlesHeader">Popular Articles</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="homepageList">
            {highestRatedArticles.map(article => {
              return (
                <HomePageArticleTile {...article} key={article.article_id} />
              );
            })}
          </ul>
        )}
        <h2 className="articlesHeader">Coding Articles</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="homepageList">
            {codingArticles.map(article => {
              return (
                <HomePageArticleTile {...article} key={article.article_id} />
              );
            })}
          </ul>
        )}
        <h2 className="articlesHeader">Football Articles</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="homepageList">
            {footballArticles.map(article => {
              return (
                <HomePageArticleTile {...article} key={article.article_id} />
              );
            })}
          </ul>
        )}
        <h2 className="articlesHeader">Cooking Articles</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="homepageList">
            {cookingArticles.map(article => {
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
    fetchArticles("votes", "desc", "coding", 3);
    fetchArticles("votes", "desc", "football", 3);
    fetchArticles("votes", "desc", "cooking", 3);
  }

  fetchArticles = (sort_by, order, topic, limit) => {
    api
      .getArticles(sort_by, order, topic, limit)
      .then(({ data: { articles } }) => {
        if (!topic) {
          this.setState({ isLoading: false, highestRatedArticles: articles });
        }
        if (topic === "coding") {
          this.setState({ isLoading: false, codingArticles: articles });
        }
        if (topic === "football") {
          this.setState({ isLoading: false, footballArticles: articles });
        }
        if (topic === "cooking") {
          this.setState({ isLoading: false, cookingArticles: articles });
        }
      });
  };
}

export default HomePage;
