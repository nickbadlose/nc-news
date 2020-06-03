import React, { useEffect, useRef, useState } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import { errorStore } from "../stores/error";
import { StyledMain, StyledLi } from "../styling/HomePage.styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHeart,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { formatFontSize } from "../utils/utils";

const HomePage = () => {
  const [state, setState] = useState({
    articles: [],
    topics: [],
    images: {},
    isLoading: true,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    Promise.all([
      api.getArticles("votes", "desc", undefined, undefined, 3),
      api.getTopics(),
    ])
      .then(
        ([
          {
            data: { articles },
          },
          {
            data: { topics },
          },
        ]) => {
          const images = topics.reduce((obj, topic) => {
            obj[topic.slug] = {
              image_url: topic.image_url,
              image_thumb: topic.image_thumb,
              image_banner: topic.image_banner,
              mobile_banner: topic.mobile_banner,
              image_card: topic.image_card,
            };
            return obj;
          }, {});
          isMounted.current &&
            setState({ articles, topics, images, isLoading: false });
        }
      )
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  }, [setState]);

  return (
    <StyledMain>
      <img
        src="https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1300&h=400&fit=crop&crop=edges"
        alt="NC-News banner"
        className="bannerImage"
      />
      <div className="description">
        <p>
          Welcome to NC-News... if you're coming to this App from my CV then
          briefly read this and then proceed to check the FAQ to look at what
          you can do here. This is an App I've made to showcase my programming
          skills, nothing more.
        </p>
      </div>
      <div className="faq">
        <div className="createLine">
          <h2>FAQ!</h2>
        </div>
        <Accordion defaultActiveKey="0" className="faqAccordion">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="topics">
        <div className="createLine">
          <h2>Hot Topics!</h2>
        </div>

        {state.isLoading ? (
          <Spinner animation="border" className="spinner" />
        ) : (
          <ul className="topicsUl">
            {state.topics.slice(0, 3).map((topic) => {
              return (
                <li key={topic.slug} className="topicsLi">
                  <Link to={`/topics/articles/${topic.slug}`}>
                    <img src={topic.image_thumb} alt={topic.slug + " image"} />
                    <div className="topicInfo">
                      <h4 className="capitalize topicSlug">
                        {topic.slug.toLowerCase()}
                      </h4>
                      <p className="topicDescription">{topic.description}</p>
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
                    {/* <h2>{topic.slug}</h2>
                    <p>{topic.description}</p>
                    <p>{topic.article_count} articles!</p> */}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="articles">
        <div className="createLine">
          <h2>Top Articles!</h2>
        </div>
        {state.isLoading ? (
          <Spinner animation="border" className="spinner" />
        ) : (
          <ul className="articlesUl">
            {state.articles.map((article) => {
              let editFont;
              if (article.title.length > 50) {
                editFont = true;
              }
              return (
                <StyledLi
                  key={article.article_id}
                  className="articlesLi"
                  editFont={editFont}
                >
                  <Link to={`/articles/${article.article_id}`}>
                    <img
                      src={state.images[article.topic].image_thumb}
                      alt={article.topic + " image"}
                    />
                    <div className="article">
                      <h4 className="capitalize articleTitle">
                        {article.title.toLowerCase()}
                      </h4>
                      <div className="articleInfo">
                        <p>
                          {article.votes}{" "}
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="heartIcon"
                          />
                        </p>
                        <p>
                          {article.comment_count}{" "}
                          <FontAwesomeIcon
                            icon={faCommentDots}
                            className="commentIcon"
                          />
                        </p>
                      </div>
                    </div>
                  </Link>
                </StyledLi>
              );
            })}
          </ul>
        )}
      </div>
    </StyledMain>
  );
};

export default HomePage;
