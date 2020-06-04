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
      align-items: center;
      padding-top: 1rem;

      h2 {
        color: ${(props) => props.theme.headerC};
      }

      .filters {
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

  .centerTile {
    display: ${(props) => props.layout === "card" && "flex"};
    flex-direction: ${(props) => props.layout === "card" && "column"};
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

  @media (max-width: 500px) {
    ul {
      width: ${(props) => props.layout === "card" && "100%"};
      flex-direction: column;
      align-items: ${(props) => props.layout === "card" && "center"};
    }
  }
`;
