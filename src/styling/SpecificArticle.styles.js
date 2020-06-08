import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .smallMarginSpinner {
    margin-top: ${(props) => props.theme.smallMarginL};
    align-self: center;
    margin-bottom: 1rem;
  }

  .main {
    background: ${(props) => props.theme.bg};
    border: ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.borderR};

    .titleBody {
      min-height: 50vh;

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
          background-color: ${(props) => props.theme.textC};
          margin-top: 1rem;
        }
      }

      .body {
        padding: 0.4rem 0.5rem 0.5rem 0.5rem;
        text-align: left;
      }
    }

    .articleInfo {
      display: flex;
      flex-flow: row nowrap;
      font-size: 0.8rem;
      margin: 0rem 0.5rem;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      p {
        margin: 0rem;
      }

      .editDelete {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;

        button {
          font-size: 0.8rem;
        }
      }

      .info {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        a {
          text-decoration: none;
          color: ${(props) => props.theme.linkC};
          align-self: flex-start;
          transition: color 0.2s ease-in-out;
        }

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

        .author {
          display: flex;
          align-items: center;

          a {
            padding: 0rem 0.2rem;
          }

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

        .authorShort {
          display: none;

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

        .comments {
          display: flex;
          align-items: center;

          .commentIcon {
            padding-right: 0.2rem;
            color: ${(props) => props.theme.linkC};
          }
        }
      }
    }

    .commentSection {
      display: flex;
      flex-flow: column nowrap;
      margin: 0rem 0.5rem;

      ul {
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (hover: hover) {
    .articleInfo {
      .info {
        a {
          :hover {
            color: ${(props) => props.theme.linkHover};
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .authorShort {
      display: flex !important;
    }

    .author {
      display: none !important;
    }
  }
`;
