import styled from "styled-components";

export const StyledSidebar = styled.div`
  background: #eaeaea;
  position: sticky !important;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0px;
  // height: calc(100vh - 8rem);
  // top: 8rem;
  // overflow: scroll;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    margin: 10px 0px 0px 0px;
    display: flex;
    flex-direction: column;

    &::after {
      content: "";
      height: 0.1px;
      width: 90%;
      display: block;
      background-color: rgb(52, 52, 52, 0.4);
      margin: 20px 0px;
      align-self: center;
    }
  }

  ul {
    list-style: none;
    padding: 0%;
  }

  a {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;

    &:hover {
      color: rgba(0, 0, 0, 0.8);
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
