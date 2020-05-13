import { useState, useEffect, useRef } from "react";
import { errorStore } from "../stores/error";
import * as api from "../api";
import throttle from "lodash.throttle";
import { navigate } from "@reach/router";
import { useImmerReducer, useImmer } from "use-immer";
import { userStore } from "../stores/userinfo";

export const useForm = (initialForm, dispatch) => {
  const [form, setForm] = useImmer(initialForm);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = (e, input) => {
    e.persist();
    setForm((c) => {
      c[input] = e.target.value;
    });
  };

  const handleEditComment = (e, newBody, comment_id) => {
    e.preventDefault();
    if (!form.editingComment) {
      setForm((c) => {
        c.editingComment = true;
      });
    } else {
      api
        .patchCommentById(comment_id, undefined, newBody)
        .then(({ body }) => {
          if (isMounted.current) {
            setForm((c) => {
              return { body, editingComment: false };
            });
          }
        })
        .catch(({ response }) => {
          errorStore.err = {
            status: response.status,
            msg: response.data.msg,
          };
        });
    }
  };

  const handlePostTopic = (e) => {
    e.preventDefault();
    setForm((c) => {
      c.invalidTopic = false;
    });
    api
      .postTopic(form)
      .then((topic) => {
        if (isMounted.current) {
          setForm((c) => {
            c = initialForm;
          });
          navigate(`/topics/articles/${topic}`);
        }
      })
      .catch(() => {
        if (isMounted.current) {
          setForm((c) => {
            c.invalidTopic = true;
          });
        }
      });
  };

  const handleEditArticle = (e, article_id) => {
    e.preventDefault();
    api
      .patchArticleById(article_id, undefined, form.body)
      .then(({ body }) => {
        if (isMounted.current) {
          dispatch({ type: "update-article", body });
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
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setForm((c) => {
      c.invalidUser = false;
    });
    userStore.logIn(form.username, form.password).catch(() => {
      if (isMounted.current) {
        setForm((c) => {
          return { ...initialForm, invalidUser: true };
        });
      }
    });
  };

  const handlePostArticle = (e, topic) => {
    e.preventDefault();
    setForm((c) => {
      c.body = "";
      c.title = "";
    });
    api
      .postArticleByTopic({
        ...form,
        topic,
        author: userStore.username,
      })
      .then(({ article_id }) => {
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
    setForm((c) => initialForm);
    api
      .postCommentByArticleId(article_id, {
        username: userStore.username,
        body: form.body,
      })
      .then(() => {
        return api.getCommentsByArticleId(article_id);
      })
      .then(({ data: { comments } }) => {
        if (isMounted.current) {
          dispatch({ type: "post-comment" });
          dispatch({ type: "fetch-comments", comments });
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
        if (isMounted.current) {
          userStore.logIn(username, password);
          navigate("/");
        }
      })
      .catch(() => {
        if (isMounted.current) {
          setForm((c) => {
            c.userInvalid = true;
          });
        }
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
    handleEditComment,
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

const articlesInitialState = {
  articles: [],
  page: 1,
  order: undefined,
  sort_by: undefined,
  maxPage: null,
  isLoading: true,
};

const articlesReducer = (state, action) => {
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

export const useArticles = (topic) => {
  const isMounted = useRef(true);
  const [state, dispatch] = useImmerReducer(
    articlesReducer,
    articlesInitialState
  );

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    dispatch({ type: "reset" });
  }, [topic, dispatch]);

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

  return { state, dispatch };
};

export const useFilter = (dispatch) => {
  const handleChange = (e) => {
    const [sort_by, order] = e.target.value.split("/");
    dispatch({
      type: "filter",
      sort_by,
      order,
    });
  };

  return { handleChange };
};

export const useScroll = (dispatch, page, maxPage, isLoading, toggle) => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleScroll = throttle((e) => {
    if (maxPage > page && toggle && !isLoading) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        isMounted.current &&
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

  // const handleScroll = throttle((e) => {
  //   if (maxPage > page && !isLoading) {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.offsetHeight - 50
  //     ) {
  //       isMounted.current &&
  //         dispatch({
  //           type: "next-page",
  //         });
  //     }
  //   }
  // }, 1000);
};

export const useSpecificArticle = (article_id, reducer, initialState) => {
  const isMounted = useRef(true);
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  useEffect(() => {
    api.getArticleById(article_id).then(({ data: { article } }) => {
      const maxPage = Math.ceil(article.comment_count / 10);
      if (isMounted.current) {
        dispatch({ type: "fetch-article", article, maxPage });
      }
    });

    return () => {
      console.log("unmounting");
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

  return [toggle, handleToggle];
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
