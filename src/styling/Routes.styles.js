import styled from "styled-components";

export const StyledRouter = styled.div`
  grid-area: main;
  margin-right: 1rem;
  border-radius: ${(props) => props.theme.borderR};

  @media (max-width: 768px) {
    margin: 0vw;
  }
`;
