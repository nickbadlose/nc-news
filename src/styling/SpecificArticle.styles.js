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

    a {
      text-decoration: none;
      color: ${(props) => props.theme.linkC};
      align-self: flex-start;
      transition: color 0.2s ease-in-out;

      :hover {
        color: ${(props) => props.theme.linkHover};
      }
    }

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

    .articleInfo {
      display: flex;
      flex-flow: row nowrap;
      font-size: 0.8em;
      margin: 0rem 0.5rem;

      .topic {
        text-transform: capitalize;
        display: flex;
        align-items: center;

        &::after {
          content: "";
          background-color: ${(props) => props.theme.linkC};
          border: 1px solid ${(props) => props.theme.linkC};
          border-radius: 50%;
          display: block;
          align-self: center;
          height: 1px;
          width: 1px;
          margin: 0px 0.2rem;
        }
      }
    }
  }
`;
