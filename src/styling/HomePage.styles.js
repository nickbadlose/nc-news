import styled from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1rem 1fr 1fr 1fr;
  grid-template-rows: auto 1rem auto 1rem auto 1rem 1fr;
  grid-template-areas:
    "img img img img img"
    ". . . . ."
    "description description description description description"
    ". . . . ."
    "faq . topics topics topics"
    "faq . . . ."
    "faq . articles articles articles";

  .bannerImage {
    grid-area: img;
    width: 100%;
    background: ${(props) => props.theme.textC};
    color: #ffffff;
    text-align: center;
    overflow: hidden;
    border-radius: ${(props) => props.theme.borderR};
    border: ${(props) => props.theme.border};
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .description {
    grid-area: description;
    background: ${(props) => props.theme.bg};
    border-radius: ${(props) => props.theme.borderR};
    border: ${(props) => props.theme.border};
    padding: 1rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.headerC};

    p {
      margin-bottom: 0rem;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkC};
    transition: color 0.2s ease-in-out;
  }

  .createLine {
    &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: ${(props) => props.theme.textC};
      margin-top: 0.5rem;
      align-self: center;
    }

    h2 {
      color: ${(props) => props.theme.headerC};
    }
  }

  .faq {
    grid-area: faq;

    .headerHelp {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      h2 {
        text-align: left;
        margin-bottom: 0rem;
      }

      p {
        margin-bottom: 0rem;

        button {
          all: unset;

          :focus {
            outline: 1px dotted;
          }

          .helpIcon {
            color: ${(props) => props.theme.linkC};
          }
        }
      }
    }

    .faqAccordion {
      overflow: show;
      margin-top: 1rem;
      border: ${(props) => props.theme.border};
      border-radius: ${(props) => props.theme.borderR};
      transition: border 0.3s ease-in-out;

      .list-group-item {
        background: ${(props) => props.theme.bg};
      }

      .question {
        padding: 0.75rem 0.5rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        text-align: left;

        .arrowIcon {
          color: ${(props) => props.theme.headerC};
        }

        :focus {
          outline: none;
          .arrowIcon {
            outline: 1px dotted;
          }
        }
      }

      .answer {
        padding: 0.75rem 0.5rem;
        text-align: left;

        .list-group {
          margin-top: 0.75rem;
        }

        .list-group-item {
          margin-bottom: 0rem;
          padding: 0.75rem 0.5rem 0.75rem 0rem;
          border-right: none;
          border-left: none;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 0rem;
    justify-content: space-between;
  }

  li {
    border: ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.borderR};
    flex: 0 0 calc((100% - 2rem) / 3);
    min-height: 100%;
    min-height: 15vw;
    margin-top: 1rem;
    position: relative;
    transition: border 0.3s ease-in-out;
    overflow: hidden;
    background: ${(props) => props.theme.textC};

    :focus {
      outline: 1px dotted;
    }

    h4 {
      margin: 0.5rem 0.5rem 0rem 0.5rem;
    }

    p {
      margin: 0rem 0.5rem 0.5rem 0.5rem;
    }

    img {
      position: relative;
      width: 100%;
      height: 100%;
      filter: brightness(50%);
      color: black;
    }

    a {
      color: #ffffff;
      transition: color 0.2s ease-in-out;

      :focus {
        outline: 1px dotted black;
      }
    }
  }

  .topics {
    grid-area: topics;

    h2 {
      text-align: left;
    }

    .topicsLi {
      .topicInfo {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        text-align: left;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        .topicDescription {
          margin-bottom: 0rem;
        }
      }
    }
  }

  .articles {
    grid-area: articles;

    h2 {
      text-align: left;
    }

    .articlesLi {
      .article {
        width: 100%;
        min-height: 100%;
        position: absolute;
        top: 0px;
        text-align: left;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        .articleTitle {
          flex: 1 1 0rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .articleInfo {
          flex: 0 0 0rem;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
        }
      }
    }
  }

  @media (hover: hover) {
    .faqAccordion {
      :hover {
        border: 1px solid ${(props) => props.theme.borderHover};
      }

      .question {
        :hover {
          cursor: pointer;
          .arrowIcon {
            color: ${(props) => props.theme.linkHover};
          }
        }
      }
    }

    li {
      :hover {
        border: 1px solid ${(props) => props.theme.borderHover};
      }

      a {
        :hover {
          color: skyblue;
        }
      }
    }

    a {
      :hover {
        color: ${(props) => props.theme.linkHover};
      }
    }
  }

  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1rem 1fr 1rem 1fr;
    grid-template-rows: auto 1rem auto 1rem auto;
    grid-template-areas:
      "img img img img img"
      ". . . . ."
      "description description description description description"
      ". . . . ."
      "faq . topics . articles";

    ul {
      flex-flow: column nowrap;
    }

    li {
      min-width: 100%;
      max-width: 100%;
      min-height: 100%;
      min-height: 20vw;
    }
  }

  @media (max-width: 590px) {
    grid-template-columns: 1fr 1rem 1fr;
    grid-template-rows: auto 1rem auto 1rem auto 1rem auto;
    grid-template-areas:
      "img img img"
      ". . ."
      "description description description"
      ". . ."
      "faq faq faq"
      ". . ."
      "topics . articles";

    li {
      min-height: 100%;
      min-height: 30vw;
    }
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1rem auto 1rem auto 1rem auto 1rem auto;
    grid-template-areas:
      "img"
      "."
      "description"
      "."
      "faq"
      "."
      "topics"
      "."
      "articles";

    li {
      min-height: 100%;
      min-height: 60vw;
    }
  }
`;

export const StyledLi = styled.li`
  @media (max-width: 1400px) and (min-width: 1201px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.3rem"};
    }
  }

  @media (max-width: 1200px) and (min-width: 1151px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.1rem"};
    }
  }

  @media (max-width: 900px) and (min-width: 826px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.3rem"};
    }
  }

  @media (max-width: 825px) and (min-width: 801px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.2rem"};
    }
  }

  @media (max-width: 800px) and (min-width: 769px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.1rem"};
    }
  }

  @media (max-width: 730px) and (min-width: 651px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.3rem"};
    }
  }

  @media (max-width: 650px) and (min-width: 591px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.1rem"};
    }
  }

  @media (max-width: 500px) and (min-width: 431px) {
    .articleTitle {
      font-size: ${(props) => props.editFont && "1.3rem"};
    }
  }
`;
