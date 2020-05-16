import React from "react";
import { StyledHeader } from "../styling/Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="blue">NC</h1>
      <h1 className="red">News</h1>
    </StyledHeader>
  );
};

export default Header;
