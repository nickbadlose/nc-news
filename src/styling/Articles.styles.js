import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    // background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.headerC};
    align-self: flex-start;
    margin: 1rem 1rem 0rem 0rem;
    // width: 100%;
    // text-align: left;
  }

  hr {
    // align-self: center;
    background: ${(props) => props.theme.borderC};
    // width: 80%;
    // margin-left: 1rem;
  }
`;
