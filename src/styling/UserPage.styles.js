import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;

  .username {
    padding-top: 1rem;
    color: ${(props) => props.theme.headerC};
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
    text-transform: capitalize;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.borderC};
      margin-top: 1rem;
    }
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .layout {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 0.5rem;
    align-items: flex-start;

    .userInfo {
      flex: 0 0 198px;
      background: ${(props) => props.theme.bg};
      border: ${(props) => props.theme.border};
      border-radius: ${(props) => props.theme.borderR};
      position: sticky;
      top: calc(2.5vw + 3.5rem);
      text-align: left;
      overflow: hidden;

      .titleText {
        padding: 0.5rem;
      }
      .userInfoTitle {
        text-transform: capitalize;
      }

      .stars {
        font-size: 0.85rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .memberJoinDate {
        font-size: 0.85rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      img {
        width: 198px;
        height: 198px;
        min-width: 198px;
        min-height: 198px;
        max-width: 198px;
        max-height: 198px;
        background: ${(props) => props.theme.textC};
        color: #ffffff;
        text-align: center;
        overflow: hidden;
      }

      .text {
        text-align: left;
        margin: 1rem 0.5rem;
        font-size: 0.95rem;
      }

      .starIcon {
        color: ${(props) => props.theme.linkC};
      }

      .helpIcon {
        color: ${(props) => props.theme.linkC};
      }

      .clockIcon {
        color: ${(props) => props.theme.linkC};
      }
    }

    .articlesComments {
      flex: 1 1 50%;
      margin-left: 1rem;

      ul {
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
      }
    }

    /* .articles {
      flex: 1 1 calc((100% - 200px / 2));
      background: ${(props) => props.theme.bg};
      border: ${(props) => props.theme.border};
      border-radius: ${(props) => props.theme.borderR};
      margin: 0rem 1rem;
    }

    .comments {
      flex: 1 1 calc((100% - 200px / 2));
      background: ${(props) => props.theme.bg};
      border: ${(props) => props.theme.border};
      border-radius: ${(props) => props.theme.borderR};
    } */
  }
`;
