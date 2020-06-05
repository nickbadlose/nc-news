import styled from "styled-components";

export const StyledDiv = styled.div`
  .createLine {
    &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: ${(props) => props.theme.borderC};
      margin-top: 1rem;
      align-self: center;
    }

    h2 {
      padding-top: 1rem;
      color: ${(props) => props.theme.headerC};
      text-transform: capitalize;
      text-align: left;
    }
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .numberOfMatches {
    margin-top: 1rem;

    h4 {
      color: ${(props) => props.theme.headerC};
      text-align: left;
      margin-bottom: 0rem;
    }
  }

  ul {
    margin: 0px;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;

    li {
      margin-top: 1rem;
      border-radius: ${(props) => props.theme.borderR};
      border: ${(props) => props.theme.border};
      transition: border 0.3s ease-in-out;
      text-align: left;

      a {
        text-decoration: none;
        color: ${(props) => props.theme.linkC};
        align-self: flex-start;
        transition: color 0.2s ease-in-out;
      }

      .topic {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: stretch;
        border: none;

        p {
          margin-bottom: 0rem;
        }

        .topicImage {
          width: 128px;
          height: 128px;
          min-width: 128px;
          min-height: 128px;
          max-width: 128px;
          max-height: 128px;
          background: ${(props) => props.theme.textC};
          color: #ffffff;
          text-align: center;
          overflow: hidden;
        }

        .topicBody {
          padding: 0.5rem;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;

          .topicTitle {
            margin-bottom: 0rem;
          }

          .bookIcon {
            color: ${(props) => props.theme.linkC};
          }
        }
      }

      .user {
        .avatar {
          width: 2rem;
          height: 2rem;
          min-width: 2rem;
          min-height: 2rem;
          max-width: 2rem;
          max-height: 2rem;
          background: ${(props) => props.theme.textC};
          color: #ffffff;
          text-align: center;
          overflow: hidden;
          margin-right: 0.2rem;
          border-radius: ${(props) => props.theme.borderR};
          border: ${(props) => props.theme.border};
        }
      }
    }
  }

  .noResults {
    background: ${(props) => props.theme.bg};
    border-radius: ${(props) => props.theme.borderR};
    border: ${(props) => props.theme.border};
    padding: 1rem;
    margin-top: 1rem;
  }

  @media (hover: hover) {
    li {
      :hover {
        border: 1px solid #ffffff;
      }

      a {
        :hover {
          color: ${(props) => props.theme.linkHover};
        }
      }
    }
  }

  @media (max-width: 390px) {
    .topicImage {
      display: none;
    }
  }
`;
