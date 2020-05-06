import { useState, useEffect, useRef } from "react";
import { errorStore } from "../stores/error";
import * as api from "../api";
import { articlesStore } from "../stores/articles";
import throttle from "lodash.throttle";

export const useTopics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api
      .getTopics()
      .then(({ data: { topics } }) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  }, [isLoading, setIsLoading]);

  return {
    topics,
    setTopics,
    isLoading,
  };
};

export const useArticlesAndScroll = (sort_by, order, topic, page) => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      console.log("unmounting...");
      isMounted.current = false;
      articlesStore.initialiseState();
    };
  }, []);

  useEffect(() => {
    articlesStore.page = 1;

    api
      .getArticles(sort_by, order, topic, 1)
      .then(({ data: { articles, total_count } }) => {
        const maxPage = Math.ceil(total_count / 10);
        if (isMounted.current) {
          articlesStore.articles = articles;
          articlesStore.maxPage = maxPage;
          articlesStore.isLoading = false;
        }
      })
      .catch(({ response }) => {
        errorStore.err = {
          status: response.status,
          msg: response.data.msg,
        };
      });
  }, [sort_by, order, topic]);

  useEffect(() => {
    if (page !== 1) {
      api
        .getArticles(
          articlesStore.sort_by,
          articlesStore.order,
          articlesStore.topic,
          articlesStore.page
        )
        .then(({ data: { articles } }) => {
          if (isMounted.current) {
            articlesStore.articles = [...articlesStore.articles, ...articles];
          }
        });
    }
  }, [page]);

  const handleScroll = throttle((e) => {
    if (articlesStore.maxPage !== page && !articlesStore.isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        articlesStore.page = page + 1;
      }
    }
  }, 1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
};

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return { toggle, handleToggle };
};

export const useVotes = (id, article) => {
  const [voteDifference, setVoteDifference] = useState(0);

  const handleVotes = (voteChange) => {
    setVoteDifference((voteDifference) => voteDifference + voteChange);

    const promise = article
      ? api.patchArticleById(id, voteChange)
      : api.patchCommentById(id, voteChange);

    promise.catch(() => {
      setVoteDifference((voteDifference) => voteDifference - voteChange);
    });
  };

  return { voteDifference, handleVotes };
};

// export const useformState = () => {}
// export const useApi = () => {};
// export const useLocalStorage = () => {};
// export const useDarkMode = () => {};
// export const useAuth = () => {};
// export const useModal = () => {};
