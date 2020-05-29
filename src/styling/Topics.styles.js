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

  .centerTiles {
    display: flex;
    flex-flow: column nowrap;
  }

  ul {
    margin: 0rem;
    display: flex;
    flex-flow: row wrap;
    align-self: center;
    width: calc(100% + 1rem);
    justify-content: flex-start;
  }
`;

export const StyledLi = styled.li`
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderR};
  flex-grow: 1;
  max-width: calc((100% - 4rem) / 4);
  min-width: calc((100% - 4rem) / 4);
  height: 100%;
  min-height: 15vw;
  margin: 1rem 0.5rem 0rem 0.5rem;
  position: relative;
  transition: border 0.3s ease-in-out;
  overflow: hidden;
  background: ${(props) => props.theme.textC};

  :hover {
    border: 1px solid ${(props) => props.theme.borderHover};
  }

  :focus {
    outline: 1px dotted;
  }

  h4 {
    margin: 0.5rem;
  }

  p {
    margin: 0.5rem;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    filter: brightness(50%);
    color: black;
  }

  a {
    color: #ffffff;
    transition: color 0.2s ease-in-out;

    :hover {
      color: skyblue;
    }

    :focus {
      outline: 1px dotted black;
    }
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  @media (max-width: 950px) {
    max-width: calc((100% - 3rem) / 3);
    min-height: 20vw;
  }

  @media (max-width: 560px) {
    max-width: calc((100% - 2rem) / 2);
    min-height: 30vw;
  }

  @media (max-width: 360px) {
    max-width: calc((100% - 1rem));
    min-height: 60vw;
  }
`;
