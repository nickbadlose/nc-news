import React from "react";
import { Link } from "@reach/router";
import PostTopicForm from "./PostTopicForm.jsx";
import { useTopics } from "../hooks";
import { StyledMain, StyledLi } from "../styling/Topics.styles";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
// import superagent from "superagent";

// const clientID =
//   "8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d";

// const { useState, useEffect, useRef } = React;

// const simpleGet = (options) => {
//   superagent.get(options.url).then(function (res) {
//     if (options.onSuccess) options.onSuccess(res);
//   });
// };

const Topics = () => {
  const { topics, isLoading } = useTopics();

  // let [photos, setPhotos] = useState([]);
  // let [query, setQuery] = useState("");
  // const queryInput = useRef(null);

  // const numberOfPhotos = 10;
  // const url =
  //   "https://api.unsplash.com/photos/random/?count=" +
  //   numberOfPhotos +
  //   "&client_id=" +
  //   clientID;

  // useEffect(() => {
  //   const photosUrl = query ? `${url}&query=${query}` : url;

  //   simpleGet({
  //     url: photosUrl,
  //     onSuccess: (res) => {
  //       setPhotos(res.body);
  //     },
  //   });
  // }, [query, url]);

  // const searchPhotos = (e) => {
  //   e.preventDefault();
  //   setQuery(queryInput.current.value);
  // };
  return (
    <StyledMain>
      {/* <div className="box">
        <form
          id="unsplash-search"
          className="unsplash-search form"
          onSubmit={searchPhotos}
        >
          <label>
            Search Photos on Unsplash
            <input
              ref={queryInput}
              placeholder="Try 'dogs' or 'coffee'!"
              type="search"
              className="input"
              defaultValue=""
              style={{ marginBottom: 20 }}
            />
          </label>
        </form>

        <ul className="photo-grid">
          {photos.map((photo) => {
            return (
              <li key={photo.id}>
                <img
                  src={photo.urls.regular}
                  // onSuccessfulClipboardCopy={() => {
                  //   // showUserMessage();
                  //   // pingUnsplash(photo.links.download_location);
                  // }}
                  alt="unsplash"
                />
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="createLine">
        <div className="headerPostTopic">
          <h2>Topics</h2>
          <PostTopicForm />
        </div>
      </div>
      {isLoading ? (
        <Spinner animation="border" className="spinner" />
      ) : (
        <div className="centerTiles">
          <ul>
            {topics.map((topic) => {
              return (
                <StyledLi key={topic.slug}>
                  <Link to={`/topics/articles/${topic.slug}`}>
                    <img src={topic.image_thumb} alt={topic.slug + " image"} />
                    <div className="topicInfo">
                      <h4>{topic.slug}</h4>
                      <p>{topic.description}</p>
                      {+topic.article_count === 1 ? (
                        <p>
                          <FontAwesomeIcon icon={faBook} className="bookIcon" />{" "}
                          {topic.article_count} article!
                        </p>
                      ) : (
                        <p>
                          <FontAwesomeIcon icon={faBook} className="bookIcon" />{" "}
                          {topic.article_count} articles!
                        </p>
                      )}
                    </div>
                  </Link>
                </StyledLi>
              );
            })}
          </ul>
        </div>
      )}
    </StyledMain>
  );
};

export default Topics;
