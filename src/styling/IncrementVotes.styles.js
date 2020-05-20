import styled from "styled-components";

export const StyledDiv = styled.div`
  // grid-area: votes;
  padding-top: 0.25rem;
  min-width: 1.5rem;
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

    :disabled {
      color: #aa2d0a;
    }
  }
`;
