import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;

  .createLine {
    &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: ${(props) => props.theme.borderC};
      margin-top: 0.5rem;
      align-self: center;
    }

    .headerPostTopic {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;

      h2 {
        color: ${(props) => props.theme.headerC};
      }
    }
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }
`;
