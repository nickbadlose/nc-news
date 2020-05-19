import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  .createLine {

          &::after {
        content: "";
        height: 1px;
        // width: 90%;
        display: block;
        background-color: ${(props) => props.theme.borderC};
        // margin: 1rem 0px;
        margin-top: 0.5rem ;
        align-self: center;
      }

    .headerFilter {
      display: flex;
      // flex-direction: column;
      justify-content: space-between;
      align-items: center !important;
      padding-top: 1rem;
  
      h2 {
        // order: 1;
        // align-self: flex-start;
        // background: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.headerC};
        // align-self: flex-start;
        // margin: 1rem 1rem 0rem 0rem;
        // width: 100%;
        // text-align: left;
        // margin: 0px;
      }
    }
  }


  // img {
  //   border-radius: 3px;
  //   // height: 300px;
  //   // width: 400px;
  //   filter: brightness(50%);
  // }


  hr {
    // align-self: center;
    background: ${(props) => props.theme.borderC};
    margin: calc(0.5rem + 1px) 0rem 0rem 0rem;
    // width: 80%;
    // margin-left: 1rem;
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  .smallMarginSpinner {
    margin-top: ${(props) => props.theme.smallMarginL};
    align-self: center;
  }

  ul {
    margin: 0px;
  }
`;
