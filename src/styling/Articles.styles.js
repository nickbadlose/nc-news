import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  .headerFilter {
    display: flex;
    justify-content: space-between;
    align-items: center !important;
    margin-top: 1rem;
  }

  img {
    border-radius: 3px;
    // height: 300px;
    // width: 400px;
    filter: brightness(50%);
  }

  h2 {
    // background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.headerC};
    // align-self: flex-start;
    // margin: 1rem 1rem 0rem 0rem;
    // width: 100%;
    // text-align: left;
    // margin: 0px;
  }

  hr {
    // align-self: center;
    background: ${(props) => props.theme.borderC};
    margin: calc(0.5rem + 1px) 0rem 0rem 0rem;
    // width: 80%;
    // margin-left: 1rem;
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .smallMarginSpinner {
    margin-top: ${(props) => props.theme.smallMarginL};
    align-self: center;
  }

  ul {
    margin: 0px;
  }
`;
