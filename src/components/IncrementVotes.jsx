import React from "react";
import { useVotes } from "../hooks";
import { StyledDiv } from "../styling/IncrementVotes.styles";

const IncrementVotes = ({ votes, id, api }) => {
  const { voteDifference, handleVotes } = useVotes(id, api);

  return (
    <StyledDiv>
      <button
        onClick={() => handleVotes(1)}
        disabled={voteDifference === 1 && true}
      >
        ⬆
      </button>
      <p>{votes + voteDifference}</p>
      <button
        onClick={() => handleVotes(-1)}
        disabled={voteDifference === -1 && true}
      >
        ⬇
      </button>
    </StyledDiv>
  );
};

export default IncrementVotes;
