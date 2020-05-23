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
  /* width: 100%; */

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
      align-self: flex-start;
      color: ${(props) => props.theme.linkC};
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
      margin: 0rem 0.5rem;

      p {
        margin: 0rem;
      }

      .topicComments {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;

        .author {
          display: flex !important;
          flex-wrap: nowrap !important;
        }

        .comments {
          display: flex !important;
          flex-wrap: nowrap !important;
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
            margin: 0px 3px;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .topic {
      display: none !important;
    }
  }

  @media (max-width: 500px) {
    max-height: unset;

    .main {
      flex-grow: 1;
      justify-content: center;

      .articleInfo {
        display: none;
      }

      .titleMobile {
        font-size: ${(props) => props.fontSize};
        display: block !important;
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
  }
`;

export const StyledLiCard = styled.li`
  flex-grow: 1;
  max-width: calc((100% - 3rem) / 3);
  margin: 1rem 0.5rem 0rem 0.5rem;

  .card {
    border: ${(props) => props.theme.border};
    /* border: 2px solid black; */
    :hover {
      border: 1px solid #ffffff;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkC};
  }

  /* .heightSetter {
    position: relative;
    height: 160px;
    overflow: hidden; */

  .titleBody {
    padding: 0.5rem;
    position: relative;
    overflow: hidden;
    /* height: 1% !important; */
    /* min-height: 160px; */

    /* max-height: ${(props) => (props.toggle ? "300px" : "160px")};
    transition: max-height 0.3s ease; */
    /* transform: rotate(${(props) => (props.toggle ? "180deg" : "0deg")}); */

    .title {
      min-height: 146px;
      overflow: hidden;
      text-transform: capitalize;
      display: flex;
               flex-direction: column;
               justify-content: center;
    }

    /* .textFader {
      background: white;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 60%,
        rgba(255, 255, 255, 1) 100%
      ); */
      /* display: ${(props) => (props.toggle ? "none" : "block")};

      transition: display 2s ease-in-out; */
    }
  }
  /* } */

  .topicAuthor {
    padding: 0.1rem 0.5rem;
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

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
        margin: 0px 3px;
      }
    }
  }

  /* do box border shadow instead of hover stuff me thinks */

  .image {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 950px) {
    max-width: calc((100% - 2rem) / 2);
  }

  @media (max-width: 768px) {
    max-width: calc((100% - 3rem) / 3);
  }

  @media (max-width: 730px) {
    max-width: calc((100% - 2rem) / 2);
  }

  @media (max-width: 500px) {
    max-width: calc(100% - 1rem);
  }
`;
