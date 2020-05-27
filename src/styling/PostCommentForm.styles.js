import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0rem 0.5rem 1rem 0.5rem;
  border-radius: ${(props) => props.theme.borderR};
  border: ${(props) => props.theme.border};

  .commentInput {
    min-height: 20vh;
    border: none;
  }

  .button {
    background: #f6f7f8;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    .commentButton {
      margin: 0.5rem;
    }
  }
`;
