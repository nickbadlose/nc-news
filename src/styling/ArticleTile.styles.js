import styled from "styled-components";

export const StyledLi = styled.li`
  background: #ffffff;
  margin-top: 1rem;
  border-radius: ${(props) => props.theme.borderR};
  border: ${(props) => props.theme.border};
  display: grid;
  grid-template-columns: 1fr 20fr;
  grid-template-areas: "votes article";

  a {
    text-decoration: none;
    align-self: flex-start;
    color: ${(props) => props.theme.linkC};
    // margin: 0.5rem;
  }

  .main {
    grid-area: article;
  }

  .articleInfo {
    display: flex;
    justify-content: space-between;
    // flex: 1 1 5;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    font-size: 0.8rem;
    border-bottom: ${(props) => props.theme.border};
    width: 97%;

    p {
      margin: 0rem;
    }
  }

  @media (max-width: 450px) {
    .author {
      display: none;
    }
  }
`;
