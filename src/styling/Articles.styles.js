import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

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
      align-items: center !important;
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

  .smallMarginSpinner {
    margin-top: ${(props) => props.theme.smallMarginL};
    align-self: center;
  }

  .centerTile {
    display: ${(props) => props.card && "flex"};
    flex-direction: ${(props) => props.card && "column"};
  }

  ul {
    margin: 0px;
    display: flex;
    flex-direction: ${(props) => (props.card ? "row" : "column")};
    flex-wrap: ${(props) => props.card && "wrap"};
    align-items: ${(props) => !props.card && "stretch"};
    justify-content: ${(props) => props.card && "flex-start"};
    width: ${(props) => props.card && "calc(100% + 1rem)"};
    align-self: ${(props) => props.card && "center"};
  }

  @media (max-width: 730px) {
    ul {
      width: ${(props) => props.card && "calc(80% + 1rem)"};
    }
  }

  @media (max-width: 670px) {
    ul {
      width: ${(props) => props.card && "calc(90% + 1rem)"};
    }
  }

  @media (max-width: 600px) {
    ul {
      width: ${(props) => props.card && "calc(100% + 1rem)"};
    }
  }

  @media (max-width: 500px) {
    ul {
      width: ${(props) => props.card && "calc(70% + 1rem)"};
    }
  }

  @media (max-width: 450px) {
    ul {
      width: ${(props) => props.card && "calc(100% + 1rem)"};
    }
  }
`;
