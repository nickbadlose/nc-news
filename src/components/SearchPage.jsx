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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { darkStore } from "../stores/darkMode";

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
      <div className="createLine">
        <h2>Search</h2>
      </div>
      {state.isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <main>
          <div className="numberOfMatches">
            <h4>
              {state.searchData.length} matches for{" "}
              <span className="capitalize">"{search}"</span>
            </h4>
          </div>
          {state.searchData.length ? (
            <ul>
              {state.searchData.map((data) => {
                if (data.slug) {
                  return (
                    <li key={state.searchData.indexOf(data)}>
                      <Card
                        className="topic"
                        bg={darkStore.darkMode ? "dark" : "light"}
                      >
                        <Link to={`/topics/articles/${data.slug}`}>
                          <img
                            src={data.image_thumb}
                            alt={data.slug}
                            className="topicImage"
                          />
                        </Link>
                        <Card.Body className="topicBody">
                          <Link to={`/topics/articles/${data.slug}`}>
                            <Card.Title className="capitalize topicTitle">
                              {data.slug}
                            </Card.Title>
                          </Link>
                          <Card.Text className="topicDescription">
                            {data.description}
                          </Card.Text>
                          <Card.Text className="blockquote-footer ">
                            <FontAwesomeIcon
                              icon={faBook}
                              className="bookIcon"
                            />{" "}
                            {+data.article_count === 1
                              ? `${data.article_count} article!`
                              : `${data.article_count} articles!`}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </li>
                  );
                } else if (data.username) {
                  return (
                    <li key={state.searchData.indexOf(data)}>
                      <Card
                        className="user"
                        bg={darkStore.darkMode ? "dark" : "light"}
                      >
                        <Card.Body>
                          <Card.Title className="capitalize">
                            <img
                              src={data.avatar_url}
                              alt="Avatar"
                              className="avatar"
                            />
                            <Link to={`/${data.username}`}>
                              {data.username}
                            </Link>{" "}
                          </Card.Title>
                          <footer className="blockquote-footer ">
                            member since {formatDate(data.joined).date}
                          </footer>
                        </Card.Body>
                      </Card>
                    </li>
                  );
                } else
                  return (
                    <ArticleTile
                      searchLayout={true}
                      key={state.searchData.indexOf(data)}
                      {...data}
                    />
                  );
              })}
            </ul>
          ) : (
            <p className="noResults">
              Sorry your search didn't match any documents.
            </p>
          )}
        </main>
      )}
    </StyledDiv>
  );
};

export default SearchPage;
