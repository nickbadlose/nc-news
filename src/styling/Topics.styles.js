import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;

  /* .box {
    width: 50%;
  } */

  /* .photo-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px -8px 0;
    li {
      height: 20vh;
      flex-grow: 1;
      margin: 0 8px 8px 0;
    }
    li:last-child {
      flex-grow: 10;
    }
    img {
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      vertical-align: bottom;
      border-radius: 4px;
    }
  } */

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
    align-items: center;
  }

  ul {
    margin: 0rem;
    display: flex;
    flex-flow: row wrap;
    align-self: center;
    width: calc(100% + 1rem);
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    ul {
      width: calc(100% + 2vw);
    }
  }

  @media (max-width: 360px) {
    ul {
      flex-flow: column nowrap;
      align-items: stretch;
      width: 100%;
    }
  }
`;

export const StyledLi = styled.li`
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderR};
  flex: 0 0 calc((100% - 4rem) / 4);
  height: 100%;
  min-height: 15vw;
  margin: 1rem 0.5rem 0rem 0.5rem;
  position: relative;
  transition: border 0.3s ease-in-out;
  overflow: hidden;
  background: ${(props) => props.theme.textC};

  :focus {
    outline: 1px dotted;
  }

  h4 {
    margin: 0.5rem;
  }

  p {
    margin: 0rem 0.5rem 0.5rem 0.5rem;
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

  @media (hover: hover) {
    :hover {
      border: 1px solid ${(props) => props.theme.borderHover};
    }

    a {
      :hover {
        color: skyblue;
      }
    }
  }

  @media (max-width: 950px) {
    flex: 0 0 calc((100% - 3rem) / 3);
    min-height: 20vw;
  }

  @media (max-width: 768px) {
    flex: 0 0 calc((100% - 6vw) / 3);
    margin: 1rem 1vw 0rem 1vw;
    min-height: 30vw;
  }

  @media (max-width: 560px) {
    flex: 0 0 calc((100% - 4vw) / 2);
    min-height: 30vw;
  }

  @media (max-width: 360px) {
    min-height: 60vw;
    margin: 1rem 0rem 0rem 0rem;
  }
`;
