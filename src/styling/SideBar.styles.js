import styled from "styled-components";

export const StyledSidebar = styled.div`
  background: ${(props) => props.theme.bg};
  position: sticky;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0px;
  box-shadow: inset 7px 0px 5px -7px ${(props) => props.theme.borderC};
  // box-shadow: -2px 0px 2px ${(props) => props.theme.borderC};
  // border-left: 1px solid ${(props) => props.theme.borderC};
  // height: calc(100vh - 8rem);
  // top: 8rem;
  overflow: hidden;

  .spinner {
    margin-top: 5rem;
    align-self: center;
  }

  h2 {
    color: ${(props) => props.theme.headerC};
    margin: 1rem 0px 0px 0px;
    display: flex;
    flex-direction: column;

    &::after {
      content: "";
      height: 1px;
      width: 90%;
      display: block;
      background-color: ${(props) => props.theme.borderC};
      margin: 1rem 0px;
      align-self: center;
    }
  }

  ul {
    list-style: none;
    padding: 0%;
  }

  a {
    color: ${(props) => props.theme.textC};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.headerC};
    }
  }

  li {
    padding: 0.25rem 0rem 0.5rem 1rem;
    text-align: left;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
