import { useState, useEffect, useRef } from "react";
import { errorStore } from "../stores/error";
import * as api from "../api";
import { articlesStore } from "../stores/articles";
import throttle from "lodash.throttle";
import { navigate } from "@reach/router";
import { useImmerReducer, useImmer } from "use-immer";
import { userStore } from "../stores/userinfo";

export const useForm = (initialForm, submit) => {
  const [form, setForm] = useImmer(initialForm);

  const handleChange = (e, input) => {
    e.persist();
    setForm((c) => {
      c[input] = e.target.value;
    });
  };

  const handlePostTopic = (e) => {
    e.preventDefault();
    api
      .postTopic(form)
      .then((topic) => {
        setForm((c) => {
          c = initialForm;
        });
        navigate(`/topics/articles/${topic}`);
      })
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  };

  const handleEditArticle = (e) => {
    e.preventDefault();
    submit(form.body);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setForm((c) => {
      c.invalidUser = false;
    });
    userStore.logIn(form.username, form.password).catch(() => {
      setForm((c) => {
        return { ...initialForm, invalidUser: true };
      });
    });
  };

  const handlePostArticle = (e, topic) => {
    e.preventDefault();
    api
      .postArticleByTopic({
        ...form,
        topic,
        author: userStore.username,
      })
      .then(({ article_id }) => {
        setForm((c) => {
          c.body = "";
          c.title = "";
        });
        navigate(`/articles/${article_id}`);
      })
      .catch(({ response }) => {
        errorStore.err = {
          status: response.status,
          msg: response.data.msg,
        };
      });
  };

  const handlePostComment = (e, article_id) => {
    e.preventDefault();
    api
      .postCommentByArticleId(article_id, {
        username: userStore.username,
        body: form.body,
      })
      .then(() => {
        setForm((c) => {
          c = initialForm;
        });
        api
          .getCommentsByArticleId(article_id)
          .then(({ data: { comments } }) => {
            submit({ type: "post-comment" });
            submit({ type: "fetch-comments", comments });
          })
          .catch(({ response }) => {
            submit({
              type: "err",
              err: {
                status: response.status,
                msg: response.data.msg,
              },
            });
          });
      })
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { username, password, avatar_url, name } = form;
    setForm((c) => {
      c.userInvalid = false;
    });
    api
      .postUser({ username, name, password, avatar_url })
      .then(() => {
        userStore.logIn(username, password);
        navigate("/");
      })
      .catch(() => {
        setForm((c) => {
          c.userInvalid = true;
        });
      });
  };

  return {
    form,
    setForm,
    handleChange,
    handlePostTopic,
    handleEditArticle,
    handlePostComment,
    handleLogin,
    handleSignUp,
    handlePostArticle,
  };
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

export const useArticlesScroll = (topic) => {
  const isMounted = useRef(true);
  const [state, dispatch] = useImmerReducer(reducer, initialState);

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
    };
  }, []);

  useEffect(() => {
    dispatch({ type: "reset" });
  }, [topic]);

  useEffect(() => {
    api
      .getArticles(state.sort_by, state.order, topic, state.page)
      .then(({ data: { articles, total_count } }) => {
        const maxPage = Math.ceil(total_count / 10);
        if (isMounted.current) {
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
    if (state.maxPage > state.page && !state.isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
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

export const useArticleCommentsScroll = (
  article_id,
  toggle,
  reducer,
  initialState
) => {
  const isMounted = useRef(true);
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const handleScroll = throttle((e) => {
    if (state.maxPage !== state.page && toggle && !state.isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
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

  useEffect(() => {
    api.getArticleById(article_id).then(({ data: { article } }) => {
      const maxPage = Math.ceil(article.comment_count / 10);
      if (isMounted.current) {
        dispatch({ type: "fetch-article", article, maxPage });
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [article_id, dispatch]);

  useEffect(() => {
    api
      .getCommentsByArticleId(
        article_id,
        state.sort_by,
        state.order,
        state.page
      )
      .then(({ data: { comments } }) => {
        if (isMounted.current) {
          state.page === 1
            ? dispatch({ type: "fetch-comments", comments })
            : dispatch({
                type: "update-comments",
                comments,
              });
        }
      })
      .catch(({ response }) => {
        dispatch({
          type: "err",
          err: {
            status: response.status,
            msg: response.data.msg,
          },
        });
      });
  }, [article_id, state.sort_by, state.order, state.page, dispatch]);

  return {
    state,
    isMounted,
    dispatch,
  };
};

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
