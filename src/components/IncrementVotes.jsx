import React from "react";
import { useVotes } from "../hooks";

const IncrementVotes = ({ votes, article_id }) => {
  const { voteDifference, handleVotes } = useVotes(article_id, true);

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
