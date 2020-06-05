import styled from "styled-components";

export const StyledDiv = styled.div`
  background: ${(props) => props.article && props.theme.linkC};

  button {
    border: none;
    color: white;
    background-color: inherit;
    cursor: pointer;
    outline: none;
    transition: color 0.2s ease-in-out;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: ${(props) => props.theme.headerC};

    .up {
      :hover {
        color: ${(props) => props.theme.linkHover};
      }
    }

    .down {
      :hover {
        color: ${(props) => props.theme.linkHover};
      }
    }

    :disabled {
      color: ${(props) => props.theme.linkHover};
    }

    :focus {
      outline: dotted 1px;
    }
  }

  .articleTile {
    padding: 0.25rem 0.1rem;
    min-width: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;

    p {
      margin: 0;
    }
  }

  .specificArticle {
    display: flex;
    flex-flow: row nowrap;
    padding: 0rem 0.5rem;
    align-items: center;
    font-size: 0.8rem;

    .votes {
      padding: 0rem 0.2rem;
    }
  }
`;
