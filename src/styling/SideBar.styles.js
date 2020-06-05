import styled from "styled-components";

export const StyledSidebar = styled.div`
  background: ${(props) => props.theme.bg};
  position: sticky;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3.5rem - 5vw);
  top: calc(2.5vw + 3.5rem);
  border: 1px solid ${(props) => props.theme.borderC};
  border-radius: ${(props) => props.theme.borderR};
  overflow: hidden;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    width: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.borderC};
    outline: 1px solid ${(props) => props.theme.borderC};
  }

  :focus {
    overflow-y: scroll;
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  h2 {
    color: ${(props) => props.theme.headerC};
    background: ${(props) => props.theme.bg};
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0px;

    &::after {
      content: "";
      height: 1px;
      width: 90%;
      display: block;
      background-color: ${(props) => props.theme.borderC};
      margin-top: 1rem;
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
    transition: color 0.2s ease-in-out;
  }

  li {
    padding: 0.4rem 0rem 0.5rem 1rem;
    text-align: left;
    text-transform: capitalize;
  }

  @media (hover: hover) {
    :hover {
      overflow-y: scroll;
    }

    a {
      :hover {
        color: ${(props) => props.theme.headerC};
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
