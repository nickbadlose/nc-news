import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};

  h1 {
    color: #ffffff;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .blue {
    background-image: ${(props) => props.theme.headerGradient};
    flex-grow: 1;
    padding-right: 0.5rem;
    text-align: right;
  }

  .red {
    background-image: ${(props) => props.theme.headerGradient};
    flex-grow: 5;
    padding-left: 0.5rem;
    text-align: left;
  }
`;
