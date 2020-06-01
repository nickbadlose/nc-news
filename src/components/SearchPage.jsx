import React, { useEffect, useRef } from "react";
import * as api from "../api";
import { searchStore } from "../stores/search";
import { useImmer } from "use-immer";
import ArticleTile from "./ArticleTile";

const SearchPage = ({ search }) => {
  const isMounted = useRef(true);
  const [state, setState] = useImmer({ searchData: [], isLoading: true });

  useEffect(() => {
    return () => {
      isMounted.current = false;
      searchStore.search = "";
    };
  }, []);

  useEffect(() => {
    isMounted.current &&
      setState((c) => {
        c.isLoading = true;
      });
    api.search(search).then(({ data }) => {
      isMounted.current &&
        setState((c) => (c = { isLoading: false, searchData: data }));
    });
  }, [search, setState]);

  return (
    <div>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : state.searchData.length ? (
        <ul>
          {state.searchData.map((data) => {
            if (data.slug) {
              return (
                <li key={state.searchData.indexOf(data)}>
                  <p>Topic - {data.slug}</p>
                </li>
              );
            } else if (data.username) {
              return (
                <li key={state.searchData.indexOf(data)}>
                  <p>User - {data.username}</p>
                </li>
              );
            } else
              return (
                <ArticleTile
                  listLayout={true}
                  key={state.searchData.indexOf(data)}
                  {...data}
                />
              );
          })}
        </ul>
      ) : (
        <p>Sorry your search didn't match any documents.</p>
      )}
    </div>
  );
};

export default SearchPage;
