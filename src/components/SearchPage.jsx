import React, { useEffect, useRef } from "react";
import * as api from "../api";
import { searchStore } from "../stores/search";
import { useImmer } from "use-immer";

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
            return (
              <li key={state.searchData.indexOf(data)}>
                {data.slug ? (
                  <p>Topic - {data.slug}</p>
                ) : data.username ? (
                  <p>User - {data.username}</p>
                ) : data.author === search ? (
                  <p>
                    {data.author} - {data.title}
                  </p>
                ) : (
                  <p>Article - {data.title}</p>
                )}
              </li>
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
