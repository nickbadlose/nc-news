import React from "react";
import { useToggle } from "../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../styling/ToggleButton.styles";

const ToggleButton = ({ question }) => {
  const [toggle, handleToggle] = useToggle();
  return (
    <StyledButton onClick={handleToggle} toggle={toggle}>
      {question}
      <FontAwesomeIcon icon={faAngleDown} className="bookIcon" />
      {/* {toggle ? (
        <FontAwesomeIcon icon={faAngleUp} className="bookIcon" />
      ) : (
        <FontAwesomeIcon icon={faAngleDown} className="bookIcon" />
      )} */}
    </StyledButton>
  );
};

export default ToggleButton;
