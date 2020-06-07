import styled from "styled-components";

export const Main = styled.main`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.textC};
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  justify-content: center;
  border-radius: 5px;
  margin: 15vh auto 0px auto;
  overflow: auto;
  box-shadow: inset 0 0 5px ${(props) => props.theme.borderC};

  img {
    width: 96px;
    margin: 0px auto;
  }
`;
