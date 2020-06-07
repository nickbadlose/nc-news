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
    margin-bottom: 0rem;

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
    align-items: flex-start;

    .userInfo {
      flex: 0 0 198px;
      border: ${(props) => props.theme.border};
      border-radius: ${(props) => props.theme.borderR};
      position: sticky;
      top: calc(2.5vw + 3.5rem);
      text-align: left;
      overflow: hidden;
      margin-top: 1rem;

      .mobileImage {
        display: none;
      }

      .titleText {
        padding: 0.5rem;
      }
      .userInfoTitle {
        text-transform: capitalize;
      }

      .list-group-item {
        background: ${(props) => props.theme.bg};
      }

      .stars {
        font-size: 0.85rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          all: unset;

          :focus {
            outline: 1px dotted;
          }

          .helpIcon {
            color: ${(props) => props.theme.linkC};
          }
        }
      }

      .memberJoinDate {
        font-size: 0.85rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .cardImage {
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
      flex: 1 1 1;
      margin-left: 1rem;

      ul {
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
        margin-bottom: 0rem;
      }
    }
  }

  @media (max-width: 768px) {
    .layout {
      flex-flow: column nowrap;
      align-items: stretch;

      .userInfo {
        flex: 1 1 1;
        background: ${(props) => props.theme.bg};
        border: ${(props) => props.theme.border};
        border-radius: ${(props) => props.theme.borderR};
        position: unset;
        top: unset;
        text-align: left;
        overflow: hidden;
        margin-top: 1rem;
        display: flex;

        .userInfoTitle {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;

          .mobileImage {
            display: unset;
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

        .cardImage {
          display: none;
        }
      }

      .articlesComments {
        margin-left: 0rem !important;
      }
    }
  }
`;
