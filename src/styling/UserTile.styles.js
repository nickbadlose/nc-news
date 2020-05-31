import styled from "styled-components";

export const StyledLi = styled.li`
  text-align: left;
  background: ${(props) => props.theme.bg};
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderR};
  overflow: hidden;
  margin-top: 1rem;

  .articleCommentTitle {
    text-decoration: none;
    color: ${(props) => props.theme.linkC};
    transition: color 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.linkHover};
    }
  }

  .toggle {
    all: unset;
    transition: transform 0.5s ease;
    transform: rotate(${(props) => (props.toggle ? "180deg" : "0deg")});
    width: 100%;
    text-align: center;

    :focus {
      .arrowIcon {
        outline: 1px dotted;
      }
    }

    .arrowIcon {
      text-decoration: inherit;
      color: ${(props) => props.theme.headerC};
      font-size: 1rem;
    }

    :hover {
      cursor: pointer;
      .arrowIcon {
        color: ${(props) => props.theme.linkHover};
      }
    }
  }

  .body {
    padding: 1.25rem;
  }

  .header {
    padding: 0.25rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background: ${(props) =>
      props.article && props.theme.userArticleHeaderFooterC};

    .headerIcon {
      font-size: 1.2rem;
      padding-right: 0.2rem;
      color: ${(props) => props.theme.linkC};
    }
  }

  .footer {
    padding: 0.25rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: ${(props) => props.theme.linkC};
    font-size: 0.8rem;
    background: ${(props) =>
      props.article && props.theme.userArticleHeaderFooterC};

    .footerIcon {
      padding-left: 0.2rem;
      color: ${(props) => props.theme.linkC};
    }

    .comments {
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

    p {
      margin: 0rem;
    }
  }

  .capitalize {
    text-transform: capitalize;
    margin-right: 0.2rem;
  }
`;
