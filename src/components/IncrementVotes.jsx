import React from "react";
import { useVotes } from "../hooks";

const IncrementVotes = ({ votes, id, api }) => {
  const { voteDifference, handleVotes } = useVotes(id, api);

  return (
    <div>
      <button
        onClick={() => handleVotes(1)}
        disabled={voteDifference === 1 && true}
      >
        ⬆
      </button>
      {votes + voteDifference}
      <button
        onClick={() => handleVotes(-1)}
        disabled={voteDifference === -1 && true}
      >
        ⬇
      </button>
    </div>
  );
};

export default IncrementVotes;
