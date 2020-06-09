import styled from "styled-components";

export const StyledSidebar = styled.div`
  background: ${(props) => props.theme.bg};
  position: sticky;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3.5rem - 5vw);
  top: calc(2.5vw + 3.5rem);
  border: 1px solid ${(props) => props.theme.borderC};
  border-radius: ${(props) => props.theme.borderR};
  overflow: hidden;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    width: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarC};
    outline: 1px solid ${(props) => props.theme.borderC};
  }

  :focus {
    overflow-y: scroll;
  }

  .spinner {
    margin-top: ${(props) => props.theme.marginL};
    align-self: center;
  }

  h2 {
    color: ${(props) => props.theme.headerC};
    background: ${(props) => props.theme.bg};
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0px;
    flex: 0 0 auto;

    &::after {
      content: "";
      height: 1px;
      width: 90%;
      display: block;
      background-color: ${(props) => props.theme.textC};
      margin-top: 1rem;
      align-self: center;
    }
  }

  ul {
    list-style: none;
    padding: 0%;
    flex: 1 1 auto;
  }

  a {
    color: ${(props) => props.theme.textC};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  li {
    padding: 0.4rem 0rem 0.5rem 1rem;
    text-align: left;
    text-transform: capitalize;
  }

  @media (hover: hover) {
    :hover {
      overflow-y: scroll;
    }

    a {
      :hover {
        color: ${(props) => props.theme.headerC};
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (device-width: 812px) and (device-height: 375px) {
    display: none;
  }

  @media (device-width: 823px) and (device-height: 411px) {
    display: none;
  }

  @media (device-width: 1024px) and (device-height: 768px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  @media (device-width: 1112px) and (device-height: 834px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  @media (device-width: 834px) and (device-height: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  @media (device-width: 1366px) and (device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  @media (device-width: 1024px) and (device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  /* ----------- Galaxy Tab 2 ----------- */

  /* Portrait and Landscape */
  @media (min-device-width: 800px) and (max-device-width: 1280px) {
    display: none;
  }

  /* Portrait */
  @media (max-device-width: 800px) and (orientation: portrait) {
    display: none;
  }

  /* Landscape */
  @media (max-device-width: 1280px) and (orientation: landscape) {
    display: none;
  }

  /* ----------- Galaxy Tab S ----------- */

  /* Portrait and Landscape */
  @media (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  /* Portrait */
  @media (max-device-width: 800px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  /* Landscape */
  @media (max-device-width: 1280px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }

  /* ----------- Nexus 7 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 601px) and (device-height: 906px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) {
    display: none;
  }

  /* Portrait */
  @media screen and (device-width: 601px) and (device-height: 906px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) and (orientation: portrait) {
    display: none;
  }

  /* Landscape */
  @media screen and (device-width: 601px) and (device-height: 906px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) and (orientation: landscape) {
    display: none;
  }

  /* ----------- Nexus 9 ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 1536px) and (device-height: 2048px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) {
    display: none;
  }

  /* Portrait */
  @media screen and (device-width: 1536px) and (device-height: 2048px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) and (orientation: portrait) {
    display: none;
  }

  /* Landscape */
  @media screen and (device-width: 1536px) and (device-height: 2048px) and (-webkit-min-device-pixel-ratio: 1.331) and (-webkit-max-device-pixel-ratio: 1.332) and (orientation: landscape) {
    display: none;
  }

  /* ----------- Kindle Fire HD 7" ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    display: none;
  }

  /* Portrait */
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
    display: none;
  }

  /* Landscape */
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
    display: none;
  }

  /* ----------- Kindle Fire HD 8.9" ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1.5) {
    display: none;
  }

  /* Portrait */
  @media only screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
    display: none;
  }

  /* Landscape */
  @media only screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
    display: none;
  }

  /* ----------- Windows Phone ----------- */

  /* Portrait and Landscape */
  @media screen and (device-width: 480px) and (device-height: 800px) {
    dosplay: none;
  }

  /* Portrait */
  @media screen and (device-width: 480px) and (device-height: 800px) and (orientation: portrait) {
    dosplay: none;
  }

  /* Landscape */
  @media screen and (device-width: 480px) and (device-height: 800px) and (orientation: landscape) {
    dosplay: none;
  }
`;
