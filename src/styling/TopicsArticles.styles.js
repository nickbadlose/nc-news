import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  .bannerImage {
    width: 100%;
    height: auto;
    border-radius: ${(props) => props.theme.borderR};
    border: ${(props) => props.theme.border};
    overflow: hidden;
  }

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
      align-items: center;
      padding-top: 1rem;

      h2 {
        color: ${(props) => props.theme.headerC};
        text-transform: capitalize;
      }

      .filtersPostArticle {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
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

  .noArticles {
    margin-top: 1rem;
    background: ${(props) => props.theme.bg};
    border-radius: ${(props) => props.theme.borderR};
    border: ${(props) => props.theme.border};
    padding: 1rem;
  }

  .mainTopic {
    display: flex;
    flex-flow: row nowrap;
  }

  .topicInfo {
    flex: 0 0 198px;
    display: flex;
    flex-flow: column nowrap;
    position: sticky;
    top: calc(2.5vw + 3.5rem);
    text-align: left;
    overflow: hidden;
    margin: 1rem 1rem 0rem 0rem;
    max-height: calc(100vh - 3.5rem - 5vw);

    .info {
      border: ${(props) => props.theme.border};
      border-radius: ${(props) => props.theme.borderR};

      .h5 {
        margin-bottom: 0rem;
      }
    }

    .topContributors {
      margin-top: 1rem;
      border: ${(props) => props.theme.border};
      border-radius: ${(props) => props.theme.borderR};

      .h5 {
        margin-bottom: 0rem;
      }

      .list-group-item {
        margin-bottom: 0rem;
      }

      .contributor {
        img {
          border: ${(props) => props.theme.border};
          border-radius: ${(props) => props.theme.borderR};
          width: 20px;
          height: 20px;
          max-height: 20px;
          min-height: 20px;
          max-width: 20px;
          min-width: 20px;
          overflow: hidden;
          background: ${(props) => props.theme.textC};
        }

        a {
          text-decoration: none;
          color: ${(props) => props.theme.linkC};
          transition: color 0.2s ease-in-out;

          :hover {
            color: ${(props) => props.theme.linkHover};
          }
        }

        .articleIcon {
          color: ${(props) => props.theme.linkC};
          margin: 0rem 0.2rem 0rem 0.1rem;
        }

        .blockquote-footer {
          margin-top: 0.5rem;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
        }
      }
    }
  }

  .centerTile {
    flex: 1 1 auto;
    display: ${(props) => props.layout === "card" && "flex"};
    flex-direction: ${(props) => props.layout === "card" && "column"};
    align-items: ${(props) => props.layout === "card" && "center"};
  }

  ul {
    margin: 0px;
    display: flex;
    flex-direction: ${(props) => (props.layout === "card" ? "row" : "column")};
    flex-wrap: ${(props) => props.layout === "card" && "wrap"};
    align-items: ${(props) => props.layout === "list" && "stretch"};
    justify-content: ${(props) => props.layout === "card" && "flex-start"};
    width: ${(props) => props.layout === "card" && "calc(100% + 1rem)"};
    align-self: ${(props) => props.layout === "card" && "center"};
  }

  @media (max-width: 800px) {
    .topicInfo {
      display: none;
    }
  }

  @media (max-width: 768px) {
    ul {
      width: ${(props) => props.layout === "card" && "calc(100% + 2vw)"};
    }
  }

  @media (max-width: 500px) {
    ul {
      width: ${(props) => props.layout === "card" && "100%"};
      flex-direction: column;
      align-items: ${(props) =>
        props.layout === "card" ? "center" : "stretch"};
    }
  }

  @media (max-height: 35rem) {
    .topicInfo {
      max-height: unset;
    }
  }
`;
