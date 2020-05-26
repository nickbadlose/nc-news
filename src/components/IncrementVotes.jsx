import React from "react";
import { useVotes } from "../hooks";
import { StyledDiv } from "../styling/IncrementVotes.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faHandPointUp,
  faArrowUp,
  faArrowDown,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const IncrementVotes = ({ votes, id, api, className }) => {
  const { voteDifference, handleVotes } = useVotes(id, api);

  return (
    <StyledDiv>
      <div className={className}>
        <button
          onClick={() => handleVotes(1)}
          disabled={voteDifference === 1 && true}
          className="up"
        >
          {/* <FontAwesomeIcon icon={faArrowAltCircleUp} /> */}
        </button>
        <p>{votes + voteDifference}</p>
        <button
          onClick={() => handleVotes(-1)}
          disabled={voteDifference === -1 && true}
          className="down"
        >
          {/* <FontAwesomeIcon icon={faArrowAltCircleDown} /> */}
        </button>
      </div>
    </StyledDiv>
  );
};

export default IncrementVotes;
