import React from "react";

const ToggleButton = ({ buttonText, handleButtonChange }) => {
  return <button onClick={handleButtonChange}>{buttonText}</button>;
};

export default ToggleButton;
