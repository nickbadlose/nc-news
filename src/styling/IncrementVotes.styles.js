import styled from "styled-components";

export const StyledDiv = styled.div`
  grid-area: votes;
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  button {
    border: none;
    color: ${(props) => props.theme.linkC};
    background-color: inherit;
    cursor: pointer;
    outline: none;

    :disabled {
      color: #aa2d0a;
    }
  }
`;
