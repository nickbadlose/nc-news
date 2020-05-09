import { useState, useEffect, useRef, useReducer } from "react";
import { errorStore } from "../stores/error";
import * as api from "../api";
import { articlesStore } from "../stores/articles";
import throttle from "lodash.throttle";
import { navigate } from "@reach/router";
import { useImmerReducer } from "use-immer";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e, input) => {
    setForm({ ...form, [input]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .postTopic(form)
      .then((topic) => {
        setForm(initialForm);
        navigate(`/topics/articles/${topic}`);
      })
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  };

  return { form, handleChange, handleSubmit };
};

export const useTopics = () => {
  const isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    api
      .getTopics()
      .then(({ data: { topics } }) => {
        if (isMounted.current) {
          setTopics(topics);
          setIsLoading(false);
        }
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

const initialState = {
  articles: [],
  page: 1,
  order: undefined,
  sort_by: undefined,
  maxPage: null,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      state.maxPage = action.maxPage;
      state.page = 1;
      state.articles = action.articles;
      state.isLoading = false;
      return;
    case "update":
      state.articles = [...state.articles, ...action.articles];
      return;
    case "filter":
      state.page = 1;
      state.sort_by = action.sort_by;
      state.order = action.order;
      return;
    case "next-page":
      state.page++;
      return;
    case "reset":
      state.page = 1;
      state.sort_by = "created_at";
      state.order = undefined;
      return;
    case "err":
      errorStore.err = action.err;
      return;
    default:
      return state;
  }
};

export const useArticlesAndScroll = (topic) => {
  const isMounted = useRef(true);
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  console.log(state);

  const handleChange = (e) => {
    const [sort_by, order] = e.target.value.split("/");
    dispatch({
      type: "filter",
      sort_by,
      order,
    });
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
      console.log("unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("reset");
    dispatch({ type: "reset" });
  }, [topic]);

  useEffect(() => {
    console.log("fetching/updating ", state.sort_by, state.order, state.page);
    api
      .getArticles(state.sort_by, state.order, topic, state.page)
      .then(({ data: { articles, total_count } }) => {
        const maxPage = Math.ceil(total_count / 10);
        if (isMounted.current) {
          console.log("updating.....");
          state.page === 1
            ? dispatch({
                type: "fetch",
                maxPage,
                articles,
              })
            : dispatch({
                type: "update",
                articles,
              });
        }
      })
      .catch(({ response }) => {
        console.log(response);
        dispatch({
          type: "err",
          err: {
            status: response.status,
            msg: response.data.msg,
          },
        });
      });
  }, [state.sort_by, state.order, topic, state.page, dispatch]);

  const handleScroll = throttle((e) => {
    console.log("handling scroll");
    if (state.maxPage !== state.page && !state.isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        console.log("calling dispatch next page");
        dispatch({
          type: "next-page",
        });
      }
    }
  }, 1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { state, handleChange };
};

// export const useArticlesAndScroll = (sort_by, order, topic, page) => {
//   const isMounted = useRef(true);

//   useEffect(() => {
//     return () => {
//       isMounted.current = false;
//       articlesStore.initialiseState();
//     };
//   }, []);

//   useEffect(() => {
//     // articlesStore.page = 1;

//     api
//       .getArticles(sort_by, order, topic, 1)
//       .then(({ data: { articles, total_count } }) => {
//         const maxPage = Math.ceil(total_count / 10);
//         if (isMounted.current) {
//           articlesStore.articles = articles;
//           articlesStore.maxPage = maxPage;
//           articlesStore.isLoading = false;
//         }
//       })
//       .catch(({ response }) => {
//         errorStore.err = {
//           status: response.status,
//           msg: response.data.msg,
//         };
//       });
//   }, [sort_by, order, topic]);

//   useEffect(() => {
//     if (page !== 1) {
//       api
//         .getArticles(
//           articlesStore.sort_by,
//           articlesStore.order,
//           articlesStore.topic,
//           articlesStore.page
//         )
//         .then(({ data: { articles } }) => {
//           if (isMounted.current) {
//             articlesStore.articles = [...articlesStore.articles, ...articles];
//           }
//         });
//     }
//   }, [page]);

//   const handleScroll = throttle((e) => {
//     if (articlesStore.maxPage !== page && !articlesStore.isLoading) {
//       if (
//         window.innerHeight + window.scrollY >=
//         document.body.offsetHeight - 50
//       ) {
//         articlesStore.page = page + 1;
//       }
//     }
//   }, 1000);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);
// };

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return { toggle, handleToggle };
};

export const useVotes = (id, api) => {
  const [voteDifference, setVoteDifference] = useState(0);

  const handleVotes = (voteChange) => {
    setVoteDifference((voteDifference) => voteDifference + voteChange);

    api(id, voteChange).catch(() => {
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
