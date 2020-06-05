import React from "react";
import { useVotes } from "../hooks";
import { StyledDiv } from "../styling/IncrementVotes.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faArrowUp,
  faArrowDown,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const IncrementVotes = ({ votes, id, api, className, article }) => {
  const { voteDifference, handleVotes } = useVotes(id, api);

  return (
    <StyledDiv article={article}>
      <div className={className}>
        <button
          onClick={() => handleVotes(1)}
          disabled={voteDifference === 1 && true}
          className="up"
        >
          <FontAwesomeIcon icon={faThumbsUp} className="up" />
        </button>
        <p className="votes">{votes + voteDifference}</p>
        <button
          onClick={() => handleVotes(-1)}
          disabled={voteDifference === -1 && true}
          className="down"
        >
          <FontAwesomeIcon icon={faThumbsDown} className="down" />
        </button>
      </div>
    </StyledDiv>
  );
};

export default IncrementVotes;
