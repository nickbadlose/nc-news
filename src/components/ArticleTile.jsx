import React from "react";
import { Link } from "@reach/router";
import { formatDate, formatFontSize } from "../utils/utils";
import IncrementVotes from "./IncrementVotes";
import { useToggle } from "../hooks";
import * as api from "../api";
import { StyledLi, StyledLiCard } from "../styling/ArticleTile.styles";
import { mainTheme } from "../styling/themes.styling";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Accordion from "react-bootstrap/Accordion";

// maybe toggle ? <StyledLi> : <StlyedLiCard>
// code...
// maybe toggle ? </ StyledLi> : </ StlyedLiCard>

// const ArticleTile = ({
//   author,
//   title,
//   votes,
//   created_at,
//   comment_count,
//   body,
//   topic,
//   article_id,
//   images,
// }) => {
//   const [toggle, handleToggle] = useToggle();
//   const { date } = formatDate(created_at);
//   const fontSize = formatFontSize(title);
//   return (
//     <StyledLi theme={mainTheme} fontSize={fontSize}>
//       <IncrementVotes
//         votes={votes}
//         id={article_id}
//         api={api.patchArticleById}
//       />
//       {images && (
//         <div className="topicImage">
//           <img src={images.image_url} alt={topic} />
//         </div>
//       )}
//       <div className="main">
//         <div className="titleBody">
//           <Link to={`/articles/${article_id}`}>
//             <h4 className="title">{title.toLowerCase()}</h4>
//           </Link>
//           <Link to={`/articles/${article_id}`}>
//             <h4 className="titleMobile">
//               {title.toLowerCase()}
//               {/* {title.length < 90 ? title : title.slice(0, 90) + "..."} */}
//             </h4>
//           </Link>
//           <p className="body">
//             {body}
//             {/* {toggle || body.length < 101 ? body : body.slice(0, 100) + "..."} */}
//             {/* {body.length > 100 && (
//             <button onClick={handleToggle}>
//               {toggle ? "show less" : "show more"}
//             </button>
//           )} */}
//           </p>
//           <Link to={`/articles/${article_id}`}>
//             <div className="textFader"></div>
//           </Link>
//         </div>
//         <div className="articleInfo">
//           <p className="author">
//             By <Link to={`/${author}`}>{author}</Link> on {date}
//           </p>
//           <div className="topicComments">
//             <p className="topic">
//               <Link to={`/topics/articles/${topic}`}>{topic}</Link>
//             </p>
//             <p className="comments">Comments: {comment_count} 💬</p>
//           </div>
//         </div>
//       </div>
//     </StyledLi>
//   );
// };

const ArticleTile = ({
  author,
  title,
  votes,
  created_at,
  comment_count,
  body,
  topic,
  article_id,
  images,
}) => {
  const [toggle, handleToggle] = useToggle();
  const { date } = formatDate(created_at);
  const fontSize = formatFontSize(title);
  // console.log(images.image_url + "&ar=1:1&fit=crop");
  return (
    <StyledLiCard theme={mainTheme} fontSize={fontSize}>
      {/* <IncrementVotes
        votes={votes}
        id={article_id}
        api={api.patchArticleById}
      />
      {images && (
        <div className="topicImage">
          <img src={images} alt={topic} />
        </div>
      )}
      <div className="main">
        <div className="titleBody">
          <Link to={`/articles/${article_id}`}>
            <h4 className="title">{title}</h4>
          </Link>
          <Link to={`/articles/${article_id}`}>
            <h4 className="titleMobile">
              {title}
            </h4>
          </Link>
          <p className="body">
            {body}
          </p>
          <Link to={`/articles/${article_id}`}>
            <div className="textFader"></div>
          </Link>
        </div>
        <div className="articleInfo">
          <p className="author">
            By <Link to={`/${author}`}>{author}</Link> on {date}
          </p>
          <div className="topicComments">
            <p className="topic">
              <Link to={`/topics/articles/${topic}`}>{topic}</Link>
            </p>
            <p className="comments">Comments: {comment_count} 💬</p>
          </div>
        </div>
      </div> */}

      <Card className="card">
        {images && (
          <Card.Img
            className="image"
            variant="top"
            src={images.image_url}
            alt={topic}
          />
        )}
        <Card.Body className="titleBody">
          <Card.Title className="title">
            <Link to={`/articles/${article_id}`}>{title.toLowerCase()}</Link>
          </Card.Title>
          <Accordion>
            {/* <Card> */}
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Text>
                {toggle || body.length < 101
                  ? body
                  : body.slice(0, 100) + "..."}
              </Card.Text>
              {/* <Card.Body>Hello! I'm the body</Card.Body> */}
            </Accordion.Collapse>
            {/* </Card> */}
          </Accordion>
        </Card.Body>
        {/* <Card.Body className="comments">Comments: {comment_count} 💬</Card.Body> */}
        <Card.Footer className="text-muted topicAuthor">
          <Link to={`/${author}`} className="author">
            {author}
          </Link>
          <Link to={`/topics/articles/${topic}`}>{topic}</Link>
          Comments: {comment_count} 💬
        </Card.Footer>
      </Card>
    </StyledLiCard>
  );
};

export default ArticleTile;
