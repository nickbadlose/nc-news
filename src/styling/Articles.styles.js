import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme.headerC};
    align-self: flex-start;
    margin: 1rem;
  }

  hr {
    // align-self: center;
    width: 80%;
    margin-left: 1rem;
  }
`;
