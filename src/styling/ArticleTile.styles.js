import styled from "styled-components";

export const StyledLi = styled.li`
  background: ${(props) => props.theme.bg};
  margin-top: 1rem;
  border-radius: ${(props) => props.theme.borderR};
  border: ${(props) => props.theme.border};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-height: 130px;


  :hover {
  border: 1px solid #ffffff;
  }

  .topicImage {
    align-self: center;
    min-width: 130px;
    min-height: 130px;
    max-width: 130px;
    max-height: 130px;
    width: 130px;
    height: 130px;

    img {
      min-width: 130px;
      min-height: 130px;
      max-width: 130px;
      max-height: 130px;
      width: 100%;
      height: 100%;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    a {
      text-decoration: none;
      align-self: flex-start;
      color: ${(props) => props.theme.linkC};
    }

    .titleBody {
      position: relative;
      overflow: hidden;

      .title {
        margin: 0rem 0.5rem;
        text-align: left;
      }
  
      .body {
        margin: 0rem 0.5rem;
        text-align: left;
      }

      .textFader {
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        background: -moz-linear-gradient(top,  rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(60%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,1)));
        background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 60%,rgba(255,255,255,1) 100%);
        background: -o-linear-gradient(top,  rgba(255,255,255,0) 60%,rgba(255,255,255,1) 100%);
        background: -ms-linear-gradient(top,  rgba(255,255,255,0) 60%,rgba(255,255,255,1) 100%);
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 60%,rgba(255,255,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
      }
    }

    
    .articleInfo {
      display: flex;
      justify-content: space-between;
      // -ms-flex-align: center;
      align-items: center;
      overflow: hidden;
      font-size: 0.8rem;
      border-top: ${(props) => props.theme.border};
      min-height: 20px;
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
