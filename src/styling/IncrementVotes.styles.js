import styled from "styled-components";

export const StyledDiv = styled.div`
  .up {
    &::before {
      content: "\f062";
      /* content: "\f01b"; */
      font-family: FontAwesome;
      font-style: normal;
      font-weight: normal;
      text-decoration: inherit;
    }
  }

  .down {
    &::before {
      content: "\f063";
      /* content: "\f01a"; */
      font-family: FontAwesome;
      font-style: normal;
      font-weight: normal;
      text-decoration: inherit;
    }
  }

  button {
    border: none;
    color: ${(props) => props.theme.headerC};
    background-color: inherit;
    cursor: pointer;
    outline: none;
    transition: color 0.2s ease-in-out;

    :hover {
      color: ${(props) => props.theme.linkHover};
    }

    :disabled {
      color: ${(props) => props.theme.linkHover};
    }

    :focus {
      outline: dotted 1px;
    }
  }

  .articleTile {
    padding-top: 0.25rem;
    min-width: 1.25rem;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.linkC};
    color: ${(props) => props.theme.headerC};
    height: 100%;

    p {
      margin: 0;
    }
  }
`;
