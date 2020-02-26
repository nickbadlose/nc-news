import React from "react";

const IncrementVotes = ({ handleVotesChange }) => {
  return (
    <>
      <button value="1" onClick={handleVotesChange}>
        Upvote
      </button>
      <button value="-1" onClick={handleVotesChange}>
        Downvote
      </button>
    </>
  );
};

export default IncrementVotes;
