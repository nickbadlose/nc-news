import styled from "styled-components";

export const StyledDiv = styled.div`
  background: ${(props) => props.theme.bg};
  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderR};
  min-height: calc(100vh - 3.5rem - 5vw);

  .bannerImage {
    width: 100%;
    background: ${(props) => props.theme.textC};
    color: ${(props) => props.theme.imageTextC};
    text-align: center;
    min-height: 20vw;
  }

  .logInForm {
    margin-top: 10vh;
    margin-bottom: 2rem;
    background: ${(props) => props.theme.bg};
    width: 55%;
    padding: 1rem;
    border: 0.2rem solid #ececec;
    border-radius: ${(props) => props.theme.borderR};
    text-align: left;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.linkC};
    transition: color 0.2s ease-in-out;
  }

  @media (hover: hover) {
    a {
      :hover {
        color: ${(props) => props.theme.linkHover};
      }
    }
  }

  @media (max-width: 1050px) {
    .bannerImage {
      min-height: 22vw;
    }
  }

  @media (max-width: 1000px) {
    .logInForm {
      width: 65%;
    }
  }

  @media (max-width: 768px) {
    min-height: calc(100vh - 3.5rem - 4vh);

    .bannerImage {
      min-height: 29vw;
    }
  }

  @media (max-width: 600px) {
    .logInForm {
      width: 75%;
    }
  }

  @media (max-width: 500px) {
    .logInForm {
      width: 90%;
    }
  }
`;
