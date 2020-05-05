import React, { Component, useState, useEffect } from "react";
import ArticleTile from "./ArticleTile";
import * as api from "../api";
import FilterForm from "./FilterForm";
import throttle from "lodash.throttle";
import ErrorPage from "./ErrorPage";
// import SearchBox from "./SearchBox";
// import ErrorMessage from "./ErrorMessage";
import { observer } from "mobx-react";
import { articlesStore } from "../stores/articles";
import { errorStore } from "../stores/error";

// const useWindowEvent = (event = "scroll", callback = handleScroll) => {
//   useEffect(() => {
//     window.addEventListener(event, callback);
//     return () => window.removeEventListener(event, callback);
//   }, [event, callback]);
// };

const useArticles = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [sort_by, setSort_by] = useState(undefined);
  // const [order, setOrder] = useState(undefined);
  // const [limit, setLimit] = useState(undefined);
  // const [topic, setTopic] = useState(undefined);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("fetching...");
    articlesStore.fetchArticles();

    return () => {
      console.log("initialising state");
      articlesStore.initialiseState();
    };
  }, []);

  // useEffect(() => {
  //   if (page !== 1) {
  //     console.log("updating...");
  //     articlesStore.updateArticles(articlesStore.page);
  //   }
  // }, [page]);

  useEffect(() => {
    console.log("not updating");
    if (page !== 1) {
      console.log("updating...");
      articlesStore.updateArticles(page);
    }
  }, [page]);

  const handleScroll = throttle((e) => {
    // const { page, maxPage, isLoading } = this.state;
    if (articlesStore.maxPage !== page && !articlesStore.isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setPage((page) => page + 1);
      }
    }
  }, 2000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Created");
    return () => {
      console.log("Cleaned up");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

const Articles = observer(() => {
  useArticles();

  return (
    <main>
      <h2>Articles</h2>
      {/* <SearchBox
              fetchArticles={fetchArticles}
              errorHandler={errorHandler}
            /> */}
      <FilterForm fetchArticles={articlesStore.fetchArticles} article={true} />
      {articlesStore.isLoading ? (
        <p>Loading...</p>
      ) : (
        // invalidUser ? (
        //   <ErrorMessage err={invalidUser} />
        // ) :
        <article>
          <ul>
            {articlesStore.articles.map((article) => {
              return <ArticleTile {...article} key={article.article_id} />;
            })}
          </ul>
          {articlesStore.page < articlesStore.maxPage && (
            <p>Loading more articles...</p>
          )}
        </article>
      )}
    </main>
  );
});

class UpdatingArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    page: 1,
    sort_by: null,
    order: null,
    maxPage: null,
    err: false,
    // invalidUser: false,
    author: false,
  };
  render() {
    const {
      articles,
      isLoading,
      page,
      maxPage,
      err,
      // invalidUser,
      author,
    } = this.state;
    const {
      fetchArticles,
      // errorHandler
    } = this;
    return (
      <main>
        {err ? (
          <ErrorPage />
        ) : (
          <>
            <h2 className="articlesHeader">
              Articles{author && <> - {author}</>}
            </h2>
            {/* <SearchBox
              fetchArticles={fetchArticles}
              errorHandler={errorHandler}
            /> */}
            <FilterForm fetchArticles={fetchArticles} article={true} />
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              // invalidUser ? (
              //   <ErrorMessage err={invalidUser} />
              // ) :
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
    const { page, sort_by, order, author } = this.state;
    if (prevState.page !== page && page !== 1) {
      this.updateArticles(sort_by, order, undefined, undefined, page, author);
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

  fetchArticles = (sort_by, order, topic, limit, author) => {
    api
      .getArticles(sort_by, order, topic, limit, 1, author)
      .then(({ data }) => {
        const maxPage = Math.ceil(data.total_count / 10);

        this.setState({
          articles: data.articles,
          isLoading: false,
          sort_by,
          order,
          page: 1,
          maxPage,
          author,
        });
      })
      .catch((err) => {
        this.setState({ err: true });
      });
  };

  updateArticles = (sort_by, order, topic, limit, p, author) => {
    api
      .getArticles(sort_by, order, topic, limit, p, author)
      .then(({ data: { articles } }) => {
        this.setState((currentState) => {
          return {
            articles: [...currentState.articles, ...articles],
          };
        });
      });
  };

  // errorHandler = (invalidUser) => {
  //   invalidUser
  //     ? this.setState({ invalidUser: { msg: "User doesn't exist!" } })
  //     : this.setState({ invalidUser: false });
  // };
}

export default Articles;
