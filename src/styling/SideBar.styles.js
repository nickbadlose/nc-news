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
  // box-shadow: inset 7px 0px 5px -7px ${(props) => props.theme.borderC};
  border-radius: ${(props) => props.theme.borderR};
  // box-shadow: -2px 0px 2px ${(props) => props.theme.borderC};
  // border-left: 1px solid ${(props) => props.theme.borderC};
  overflow: hidden;
  scrollbar-width: none;
  // scrollbar-color: ${(props) => props.theme.borderC} ${(props) =>
  props.theme.bg};

  ::-webkit-scrollbar {
  width: 1px;
  }
 
  ::-webkit-scrollbar-track {
    width: 1px;
    // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
 
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.borderC};
    outline: 1px solid ${(props) => props.theme.borderC};
  }

  :hover {
    overflow-y: scroll;
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
    // box-shadow: inset 7px 0px 5px -7px ${(props) => props.theme.borderC};
    // margin: 1rem 0px 0px 0px;
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
      // margin: 1rem 0px;
      margin-top: 1rem ;
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
    padding: 0.4rem 0rem 0.5rem 1rem;
    text-align: left;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
