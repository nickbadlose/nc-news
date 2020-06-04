import styled from "styled-components";

export const StyledLi = styled.li`
  background: ${(props) => props.theme.bg};
  margin-top: 1rem;
  border-radius: ${(props) => props.theme.borderR};
  border: ${(props) => props.theme.border};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-height: 130px;
  min-height: 130px;
  transition: border 0.3s ease-in-out;
  overflow: hidden;

  :hover {
    border: 1px solid #ffffff;
  }

  .topicImage {
    align-self: center;
    min-width: 128px;
    min-height: 128px;
    max-width: 128px;
    max-height: 128px;
    width: 128px;
    height: 128px;

    img {
      min-width: 128px;
      min-height: 128px;
      max-width: 128px;
      max-height: 128px;
      width: 100%;
      height: 100%;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.linkC};
      align-self: flex-start;
      transition: color 0.2s ease-in-out;

      :hover {
        color: ${(props) => props.theme.linkHover};
      }
    }

    .titleBody {
      position: relative;
      overflow: hidden;

      .titleMobile {
        display: none;
        margin: 0rem 0.5rem;
        text-transform: capitalize;
      }

      .title {
        margin: 0rem 0.5rem;
        text-align: left;
        text-transform: capitalize;
      }

      .body {
        margin: 0rem 0.5rem;
        text-align: left;
      }

      .textFader {
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 60%,
          rgba(255, 255, 255, 1) 100%
        );
      }
    }

    .articleInfo {
      display: flex;
      justify-content: space-between;
      -ms-flex-align: center;
      flex-wrap: nowrap;
      align-items: center;
      overflow: hidden;
      font-size: 0.8rem;
      border-top: ${(props) => props.theme.border};
      min-height: 1.25rem;
      padding: 0rem 0.5rem;
      background: ${(props) => props.theme.articleFooterC};

      p {
        margin: 0rem;
      }

      .shortAuthor {
        display: none;
      }

      .topicComments {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;

        .commentIcon {
          color: ${(props) => props.theme.linkC};
          padding-left: 0.2rem;
        }

        .shortComments {
          display: none;
        }

        .topic {
          display: flex;

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
          flex-flow: row nowrap;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .comments {
      display: none !important;
    }

    .shortComments {
      display: flex !important;
      align-items: center;
    }
  }

  @media (max-width: 530px) {
    .shortAuthor {
      display: flex !important;
    }
    .author {
      display: none !important;
    }

    .articleInfo {
      justify-content: center !important;

      .shortAuthor {
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

    .shortComments {
      flex-wrap: nowrap !important;

      span {
        padding-left: 0.2rem;
      }
    }
  }

  @media (max-width: 500px) {
    max-height: unset;
    max-width: 100% !important;

    .titleBody {
      height: 100%;

      .titleMobile {
        height: 100%;
        font-size: ${(props) => props.fontSize};
        display: flex !important;
        flex-direction: column;
        flex-grow: 1;
        justify-content: center;
        margin: 0rem 0.25rem !important;
      }
    }

    .articleInfo {
      padding: 0rem 0.25rem !important;
    }

    .title {
      display: none;
    }

    .body {
      display: none;
    }

    .textFader {
      display: none;
    }
  }

  @media (max-width: 420px) {
    .topic {
      display: ${(props) => !props.searchLayout && "none !important"};
    }
  }
`;

export const StyledLiCard = styled.li`
  flex: 0 0 calc((100% - 3rem) / 3);
  margin: 1rem 0.5rem 0rem 0.5rem;

  .card {
    border: ${(props) => props.theme.border};
    transition: border 0.5s ease-in-out;
    overflow: hidden;

    :hover {
      border: 1px solid #ffffff;
    }
  }

  hr {
    margin: 0rem 0rem 0.4rem 0rem;
    background: rgba(52, 52, 52, 0.1);
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkC};
    transition: color 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.linkHover};
    }
  }

  .titleBody {
    padding: 0.5rem;
    position: relative;
    overflow: hidden;

    .title {
      min-height: 146px;
      overflow: hidden;
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .toggle {
      all: unset;
      transition: transform 0.5s ease;
      transform: rotate(${(props) => (props.toggle ? "180deg" : "0deg")});
      width: 100%;

      :focus {
        &::before {
          outline: 1px dotted;
        }
      }

      :hover {
        cursor: pointer;
        &::before {
          color: ${(props) => props.theme.linkHover};
        }
      }

      &::before {
        content: "\f107";
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        color: ${(props) => props.theme.headerC};
        font-size: 1.2rem;
        width: 100%;
      }
    }
  }

  .topicAuthor {
    padding: 0.1rem 0.5rem;
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    p {
      margin: 0px;
      padding: 0px;
    }

    a {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;

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

    .heart:nth-child(1) {
      padding-left: 0.2rem;
      color: ${(props) => props.theme.linkC};
    }

    .comments {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
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

      .commentIcon {
        padding-left: 0.2rem;
        align-self: center;
        color: ${(props) => props.theme.linkC};
      }
    }

    .votes {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  }

  .image {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1250px) {
    a:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 1150px) {
    flex: ${(props) => props.topicLayout && "0 0 calc((100% - 2rem) / 2)"};
  }

  @media (max-width: 950px) {
    flex: 0 0 calc((100% - 2rem) / 2);
    a:nth-child(2) {
      display: flex;
    }
  }

  @media (max-width: 800px) {
    a:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 calc((100% - 6vw) / 3);
    margin: 1rem 1vw 0rem 1vw;
  }

  @media (max-width: 730px) {
    flex: 0 0 calc((100% - 4vw) / 2);
  }

  @media (max-width: 500px) {
    margin: 1rem 0rem 0rem 0rem;

    a:nth-child(2) {
      display: flex;
    }
  }
`;
