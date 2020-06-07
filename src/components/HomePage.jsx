import React, { useEffect, useRef, useState } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import { errorStore } from "../stores/error";
import { StyledMain, StyledLi } from "../styling/HomePage.styles";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHeart,
  faCommentDots,
  faQuestionCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { darkStore } from "../stores/darkMode";
import { observer } from "mobx-react";

const HomePage = observer(() => {
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
      api.getTopics(1, 100),
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
            setState({
              articles,
              topics,
              images,
              isLoading: false,
            });
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
        srcSet="https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1300&h=400&fit=crop&crop=edges 1300w, https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=600&h=200&fit=crop&crop=edges 600w"
        alt="NC-News banner"
        className="bannerImage"
      />
      <div className="description">
        <p>
          Welcome to NC-News... if you're coming to this App from my CV then
          please read this and then proceed to check the FAQ (Especially the
          first 3 questions if you can't read them all) below to look at what
          you can do here. Each page has different styles and features so be
          sure to check out as many pages and try as many things as you can.
        </p>
      </div>
      <div className="faq">
        <div className="createLine">
          <div className="headerHelp">
            <h2>FAQ!</h2>{" "}
            <p>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip">
                    Click on a question to see its answer!
                  </Tooltip>
                }
              >
                <button>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="helpIcon"
                  />
                </button>
              </OverlayTrigger>
            </p>
          </div>
        </div>
        <Accordion
          className="faqAccordion"
          bg={darkStore.darkMode ? "dark" : "light"}
        >
          <Card bg={darkStore.darkMode ? "dark" : "light"}>
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="0"
              className="question"
            >
              Do I need to make an account?
              <FontAwesomeIcon icon={faAngleDown} className="arrowIcon" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="answer">
                The best thing to do is sign in as the default user, (username:
                jessjelly and password: a12345). This is because this account
                has lots of content to edit/delete and therefore a populated
                user page too. However it's definitely still a good idea to sign
                up and make an account just to see how I've handled the process.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg={darkStore.darkMode ? "dark" : "light"}>
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="1"
              className="question"
            >
              What can I do with the default account?
              <FontAwesomeIcon icon={faAngleDown} className="arrowIcon" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="answer">
                Everything, don't worry about what you do, please
                post/edit/delete as much as you like!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg={darkStore.darkMode ? "dark" : "light"}>
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="2"
              className="question"
            >
              Must see features/pages!
              <FontAwesomeIcon icon={faAngleDown} className="arrowIcon" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="answer">
                Make sure you check out these pages and featurs at least! Links
                go to the page where you can find that feature.
                <ListGroup>
                  <ListGroup.Item>Log in (via the navbar)</ListGroup.Item>
                  <ListGroup.Item>
                    View <Link to="/articles">articles</Link> page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Change layouts (via the <Link to="/articles">articles</Link>{" "}
                    or <Link to="/topics/articles/cooking">specific topic</Link>{" "}
                    page)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View <Link to="/topics">topics</Link> page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Post a topic (via the <Link to="/topics">topics</Link> page)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Toggle dark mode / light mode (via the username/login
                    dropdown in the nav bar)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View a <Link to="/articles/19">specific article</Link> page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View your profile page once logged in (via the
                    username/login dropdown in the nav bar)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Search users / topics / key words in the search bar to find
                    related results
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>{" "}
          <Card bg={darkStore.darkMode ? "dark" : "light"}>
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="3"
              className="question"
            >
              Desktop, mobile or tablet?
              <FontAwesomeIcon icon={faAngleDown} className="arrowIcon" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="answer">
                The website is responsive so feel free to try it on different
                devices if you'd like. The only difference besides the layout is
                some of the sidebars have been removed from the mobile version.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg={darkStore.darkMode ? "dark" : "light"}>
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="4"
              className="question"
            >
              List of all features/pages
              <FontAwesomeIcon icon={faAngleDown} className="arrowIcon" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="answer">
                Here's a list of all the features and pages the site has to
                offer which you can try! Links go to the page where you can find
                that feature.
                <ListGroup>
                  <ListGroup.Item>
                    Edit/delete your users articles/comments either from the{" "}
                    <Link to="/articles/19">specific article</Link> page or your{" "}
                    <Link to="/tickle122">profile (jessjelly)</Link> page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Sign up page (via the nav bar)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Vote on articles (via <Link to="/articles">articles</Link>{" "}
                    or <Link to="/articles/19">specific article</Link> page)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Post an article (via the{" "}
                    <Link to="/topics/articles/cooking">specific topic</Link>{" "}
                    page)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Comment on an article (via the{" "}
                    <Link to="/articles/19">specific article</Link> page)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View a{" "}
                    <Link to="/topics/articles/cooking">specific topic</Link>{" "}
                    page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View another users page (via a link on an article or by
                    searching for a user profile such as{" "}
                    <Link to="/tickle122">tickle122</Link>)
                  </ListGroup.Item>
                  <ListGroup.Item>Log in (via the navbar)</ListGroup.Item>
                  <ListGroup.Item>
                    View <Link to="/articles">articles</Link> page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Change layouts (via the <Link to="/articles">articles</Link>{" "}
                    or <Link to="/topics/articles/cooking">specific topic</Link>{" "}
                    page)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View <Link to="/topics">topics</Link> page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Post a topic (via the <Link to="/topics">topics</Link> page)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Toggle dark mode / light mode (via the username/login
                    dropdown in the nav bar)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View a <Link to="/articles/19">specific article</Link> page
                  </ListGroup.Item>
                  <ListGroup.Item>
                    View your profile page once logged in (via the
                    username/login dropdown in the nav bar)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Search users / topics / key words in the search bar to find
                    related results
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
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
});

export default HomePage;
