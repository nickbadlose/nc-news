import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  .createLine {
    &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: ${(props) => props.theme.borderC};
      margin-top: 0.5rem;
      align-self: center;
    }

    .headerFilter {
      display: flex;
      justify-content: space-between;
      align-items: center !important;
      padding-top: 1rem;

      h2 {
        color: ${(props) => props.theme.headerC};
      }
    }
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
