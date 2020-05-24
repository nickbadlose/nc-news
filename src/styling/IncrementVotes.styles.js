import styled from "styled-components";

export const StyledDiv = styled.div`
  padding-top: 0.25rem;
  min-width: 1.25rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.linkC};
  color: ${(props) => props.theme.headerC};

  p {
    margin: 0;
  }

  button {
    border: none;
    color: ${(props) => props.theme.headerC};
    background-color: inherit;
    cursor: pointer;
    outline: none;
    transition: color 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.linkHover};
    }

    :disabled {
      color: ${(props) => props.theme.linkHover};
    }
  }
`;
