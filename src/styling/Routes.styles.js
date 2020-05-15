import styled from "styled-components";

export const StyledRouter = styled.div`
  grid-area: main;
  // background-color: white;
  margin-right: 2.5vw;
  border-radius: ${(props) => props.theme.borderR};
  border: ${(props) => props.theme.border};
  // margin: 5% 10%;
  @media (max-width: 768px) {
     {
      margin: 0vw;
    }
  }
`;
