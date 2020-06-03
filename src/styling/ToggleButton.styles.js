import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  width: calc(100% - 1rem);
  height: 100%;
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  .bookIcon {
    color: ${(props) => props.theme.headerC};
  }

  :focus {
    outline: none;
    .bookIcon {
      outline: 1px dotted;
    }
  }

  :hover {
    cursor: pointer;
    .bookIcon {
      color: ${(props) => props.theme.linkHover};
    }
  }
`;
