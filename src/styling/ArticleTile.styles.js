import styled from "styled-components";

export const StyledLi = styled.li`
  background: ${(props) => props.theme.bg};
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
    display: flex;
    flex-direction: column;
  }

  .title {
    margin: 0rem 0.5rem;
    text-align: left;
  }

  .body {
    margin: 0rem 0.5rem;
    text-align: left;
  }

  .articleInfo {
    display: flex;
    justify-content: flex-end;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    font-size: 0.8rem;
    border-bottom: ${(props) => props.theme.border};
    margin: 0rem 0.5rem;

    .topic {
      &::after {
        content: "";
        background-color: ${(props) => props.theme.linkC};
        border: 1px solid ${(props) => props.theme.linkC};
        border-radius: 50%
        display: block;
        align-self: center;
        height: 1px;
        width: 1px;
        margin: 0px 3px;
      }
    }

    p {
      margin: 0rem;
      display: flex;
    }
  }

  .author {
    // display: flex;
    // justify-content: flex-end;
    text-align: right;
    overflow: hidden;
    font-size: 0.8rem;
    border-top: ${(props) => props.theme.border};
    margin: 0rem 0.5rem;

    p {
      margin: 0rem;
    }
  }

  // @media (max-width: 450px) {
  //   .author {
  //     display: none;
  //   }
  // }
`;
