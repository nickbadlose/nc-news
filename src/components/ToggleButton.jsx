import React from "react";

const ToggleButton = ({ buttonText, handleButtonChange }) => {
  return (
    <button onClick={handleButtonChange} className="ToggleButton">
      {buttonText}
    </button>
  );
};

export default ToggleButton;
