import styled from "styled-components";

export const StyledMain = styled.main`
  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .smallMarginSpinner {
    margin-top: ${(props) => props.theme.smallMarginL};
    align-self: center;
  }

  .main {
    background: ${(props) => props.theme.bg};
    border: ${(props) => props.theme.border};

    .title {
      padding-top: 1rem;
      color: ${(props) => props.theme.headerC};
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      text-align: left;
      display: flex;
      flex-flow: column nowrap;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.borderC};
        margin-top: 1rem;
      }
    }

    .body {
      padding: 0.4rem 0.5rem 0.5rem 0.5rem;
      text-align: left;
    }
  }
`;
