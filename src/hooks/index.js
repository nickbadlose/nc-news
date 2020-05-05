import React, { useState, useEffect } from "react";
import { errorStore } from "../stores/error";
import * as api from "../api";

// export const useLoading = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   return { isLoading, setIsLoading };
// };

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

// export const useApi = () => {};
// export const useLocalStorage = () => {};
// export const useDarkMode = () => {};
// export const useAuth = () => {};
// export const useModal = () => {};
