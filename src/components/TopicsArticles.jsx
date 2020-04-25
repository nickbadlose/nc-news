import React, { Component } from "react";
import FilterForm from "./FilterForm";
import ArticleTile from "./ArticleTile";
import * as api from "../api";
import throttle from "lodash.throttle";
import ErrorPage from "./ErrorPage";
// import PostArticleForm from "./PostArticleForm";
import { Link } from "@reach/router";

class TopicsArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    sort_by: null,
    order: null,
    maxPage: null,
    page: 1,
  };
  render() {
    const { articles, isLoading, err, page, maxPage } = this.state;
    const { fetchArticles } = this;
    const { topic } = this.props;
    return (
      <main>
        <h2 className="topicsArticleHeader">Articles - {topic}</h2>
        {err ? (
          <ErrorPage err={err} />
        ) : (
          <>
            <Link to={`/topics/articles/${topic}/post`}>
              <button>Post an article about this topic?</button>
            </Link>
            {/* <PostArticleForm topic={topic} /> */}
            <FilterForm
              fetchArticles={fetchArticles}
              article={true}
              topic={topic}
            />
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <article>
                <ul>
                  {articles.map((article) => {
                    return (
                      <ArticleTile {...article} key={article.article_id} />
                    );
                  })}
                </ul>
                {page < maxPage && <p>Loading more articles...</p>}
              </article>
            )}
          </>
        )}
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { page, sort_by, order } = this.state;

    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
    if (prevState.page !== page && page !== 1) {
      this.updateArticles(sort_by, order, undefined, page);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = throttle((e) => {
    const { page, maxPage, isLoading } = this.state;
    if (maxPage !== page && !isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        this.setState((currentState) => {
          const newPage = currentState.page + 1;
          return { page: newPage };
        });
      }
    }
  }, 2000);

  fetchArticles = (sort_by, order, limit) => {
    const { topic } = this.props;
    api
      .getArticles(sort_by, order, topic, limit, 1)
      .then(({ data }) => {
        const maxPage = Math.ceil(data.total_count / 10);
        this.setState({
          articles: data.articles,
          isLoading: false,
          sort_by,
          order,
          page: 1,
          maxPage,
        });
      })
      .catch(({ response }) => {
        this.setState({
          err: response
            ? { status: response.status, msg: response.statusText }
            : { status: 500, msg: "Oops, can't connect to the server!" },
        });
      });
  };

  updateArticles = (sort_by, order, limit, p) => {
    const { topic } = this.props;
    api
      .getArticles(sort_by, order, topic, limit, p)
      .then(({ data: { articles } }) => {
        this.setState((currentState) => {
          return {
            articles: [...currentState.articles, ...articles],
          };
        });
      });
  };
}

export default TopicsArticles;
