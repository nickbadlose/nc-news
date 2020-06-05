import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0069d9;

  h1 {
    color: #ffffff;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .blue {
    background: #122d68;
    flex-grow: 1;
    padding-right: 0.5rem;
    text-align: right;
  }

  .red {
    background: #d73831;
    flex-grow: 5;
    padding-left: 0.5rem;
    text-align: left;
  }
`;
