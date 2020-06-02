import styled from "styled-components";

export const StyledDiv = styled.div`
  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .user {
    border-radius: ${(props) => props.theme.borderR};
    border: ${(props) => props.theme.border};
    transition: border 0.3s ease-in-out;
    text-align: left;

    :hover {
      border: 1px solid #ffffff;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.linkC};
      align-self: flex-start;
      transition: color 0.2s ease-in-out;

      :hover {
        color: ${(props) => props.theme.linkHover};
      }
    }

    img {
      width: 2rem;
      height: 2rem;
      min-width: 2rem;
      min-height: 2rem;
      max-width: 2rem;
      max-height: 2rem;
      background: ${(props) => props.theme.textC};
      color: #ffffff;
      text-align: center;
      overflow: hidden;
      margin-right: 0.2rem;
    }
  }
`;
