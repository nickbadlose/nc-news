import React, { useEffect, useRef } from "react";
import * as api from "../api";
import { searchStore } from "../stores/search";
import { useImmer } from "use-immer";
import ArticleTile from "./ArticleTile";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { formatDate } from "../utils/utils";
import { Link } from "@reach/router";
import { StyledDiv } from "../styling/SearchPage.styles";

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
    <StyledDiv>
      {state.isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : state.searchData.length ? (
        <ul>
          {state.searchData.map((data) => {
            if (data.slug) {
              /* don't forget to style no results*/
              return (
                <li key={state.searchData.indexOf(data)}>
                  <p>Topic - {data.slug}</p>
                </li>
              );
            } else if (data.username) {
              return (
                <li key={state.searchData.indexOf(data)}>
                  <Card className="user">
                    <Card.Body>
                      <Card.Title className="capitalize">
                        <img src={data.avatar_url} alt="Avatar" />
                        <Link to={`/${data.username}`}>
                          {data.username}
                        </Link>{" "}
                      </Card.Title>
                      <footer className="blockquote-footer">
                        member since {formatDate(data.joined).date}
                      </footer>
                    </Card.Body>
                  </Card>
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
    </StyledDiv>
  );
};

export default SearchPage;
