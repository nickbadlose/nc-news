import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0rem 1rem;

  a.dropdown-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 400px) {
    margin: 0rem 0.5rem;
  }

  @media (max-width: 350px) {
    margin: 0rem 0.25rem;
  }
`;
