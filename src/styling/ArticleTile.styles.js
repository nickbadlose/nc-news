import styled from "styled-components";

export const StyledLi = styled.li`
  background: ${(props) => props.theme.bg};
  margin-top: 1rem;
  border-radius: ${(props) => props.theme.borderR};
  border: ${(props) => props.theme.border};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;


  :hover {
  border: 1px solid #ffffff;
  }

  .topicImage {
    align-self: center;
    min-width: 10vw;
    min-height: 10vw;
    max-width: 10vw;
    max-height: 10vw;
    width: 10vw;
    height: 10vw;

    img {
      min-width: 10vw;
      min-height: 10vw;
      max-width: 10vw;
      max-height: 10vw;
      width: 100%;
      height: 100%;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      text-decoration: none;
      align-self: flex-start;
      color: ${(props) => props.theme.linkC};
    }

    .titleBody {
      position: relative;

      // background-image: linear-gradient(to bottom, transparent, white);
      // :after {
        // content: "";
        // display: block;
        // position: absolute;
        // bottom: 0;
        // height: 20px;
        // height:200px;
        // width:100%;
        // position:fixed;
        // bottom:0;
        // background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(95%,rgba(0,0,0,1)));
        // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
      // }

      .title {
        margin: 0rem 0.5rem;
        text-align: left;
      }
  
      .body {
        margin: 0rem 0.5rem;
        text-align: left;
      }

      .fade {
        background: black;
        height:200px;
        width:200px;
        position:fixed;
        bottom:0;
        // z-index: 10;
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(95%,rgba(0,0,0,1)));
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
        // background: -webkit-linear-gradient(top, rgb(246,246,246) 17%,rgb(246,246,246) 17%,rgb(237,237,237) 33%,rgb(237,237,237) 33%,rgb(237,237,237) 47%,rgb(237,237,237) 62%,rgb(237,237,237) 62%);
      }
    }

    
    .articleInfo {
      display: flex;
      justify-content: space-between;
      -ms-flex-align: center;
      align-items: center;
      overflow: hidden;
      font-size: 0.8rem;
      border-top: ${(props) => props.theme.border};
      margin: 0rem 0.5rem;
    
      .topicComments {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    
      .topic {
        display: flex;

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
      }
    }
  }
`;
