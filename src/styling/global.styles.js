import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-display: fallback;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.capitalize {
  text-transform: capitalize;  /* capitalize first letter of each word */
}

.form-control {
  background: ${(props) => props.theme.inputBg};
  color: ${(props) => props.theme.textC};

  :disabled {
    background: ${(props) => props.theme.inputDisabledBg};
  }

  :focus {
    background: ${(props) => props.theme.inputBg};
    color: ${(props) => props.theme.textC};
  }
}

.modal-90w {
  max-width: 90%;
}

.close {
  color: ${(props) => props.theme.headerC};
  color: ${(props) => props.theme.headerC};
}
  
.modal-header {
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.headerC};
}
  
.modal-body {
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.headerC};
}
  
.modal-footer {
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.headerC};
}


.articleBodyFormGroup {
  margin-bottom: 0rem;

  .articleBodyForm {
    min-height: 40vh;
  }
}

.editCommentFormGroup {
  margin-bottom: 0rem;
  
  .editCommentInput {
    min-height: 20vh;  /* Need to do modal styles globally, not sure why I didn't have to with editArticleForm styling for input but that seems to be an anomoly. I think the global styling is needed because when the modal is set to show it is a direct child of the body instead of the component it is in. This is just my thoughts, not certain */
  }
}


/* @-moz-document url-prefix() {
  html {
    font-size: 14px;
  }
} */

html {
  background-color: ${(props) => props.theme.htmlBg};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.App {
  /* background-color: #dae0e6; */
  background-color: ${(props) => props.theme.htmlBg};
  text-align: center;
  font-family: "Guardian Text Egyptian Web", Georgia, serif;
  color: ${(props) => props.theme.textC};
  display: grid;
  grid-template-columns: 8vw auto 1rem 160px 8vw;
  grid-template-rows: 4rem 3.5rem 2.5vw auto 2.5vw;
  grid-template-areas:
    "header header header header header"
    "nav nav nav nav nav"
    ". . . . ."
    ". main . sidebar ."
    ". . . . .";
}

ul {
  list-style: none;
  padding: 0%;
}

.box {
  /* Topic image search styling is in modal so needs to be global */
  .photo-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.5rem -0.5rem 0;
    
    li {
      height: 20vh;
      flex-grow: 1;
      margin: 0 0.5rem 0.5rem 0;
    }
    
    li:last-child {
      flex-grow: 10;
    }

    img {
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      vertical-align: bottom;
      border-radius: ${(props) => props.theme.borderR};
    }
  }
}

.numbers {
  font-family: Arial, Helvetica, sans-serif;
}

@media (hover: hover) {
  .box {
  /* Setting hover image pointer */
    .photo-grid {
      img {
        :hover {
          cursor: pointer;
        }
      }
    }
  }
}

@media (max-width: 1050px) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 1rem 160px 2vw;
    grid-template-rows: 4rem 3.5rem 2.5vw auto 2.5vw;
    grid-template-areas:
      "header header header header header"
      "nav nav nav nav nav"
      ". . . . ."
      ". main . sidebar ."
      ". . . . .";
  }
}

@media (max-width: 768px) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

@media (device-width: 812px) and (device-height: 375px) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

@media (device-width: 823px) and (device-height: 411px) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

@media (device-width: 1024px) and (device-height: 768px) and (-webkit-min-device-pixel-ratio: 2) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

@media (device-width: 1112px) and (device-height: 834px) and (-webkit-min-device-pixel-ratio: 2) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

@media (device-width: 834px) and (device-height: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

@media (device-width: 1366px) and (device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

@media (device-width: 1024px) and (device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .App {
    display: grid;
    grid-template-columns: 2vw auto 2vw;
    grid-template-rows: 4rem auto 2vh auto 2vh;
    grid-template-areas:
      "header header header"
      "nav nav nav"
      ". . ."
      ". main ."
      ". . .";
  }
}

/* ----------- Galaxy Tab 2 ----------- */

/* Portrait and Landscape */
@media 
  (min-device-width: 800px) 
  and (max-device-width: 1280px) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Portrait */
@media 
  (max-device-width: 800px) 
  and (orientation: portrait) { 
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Landscape */
@media 
  (max-device-width: 1280px) 
  and (orientation: landscape) { 
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* ----------- Galaxy Tab S ----------- */

/* Portrait and Landscape */
@media 
  (min-device-width: 800px) 
  and (max-device-width: 1280px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Portrait */
@media 
  (max-device-width: 800px) 
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) { 
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Landscape */
@media 
  (max-device-width: 1280px) 
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2) { 
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* ----------- Nexus 7 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 601px) 
  and (device-height: 906px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Portrait */
@media screen 
  and (device-width: 601px) 
  and (device-height: 906px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: portrait) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Landscape */
@media screen 
  and (device-width: 601px) 
  and (device-height: 906px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: landscape) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* ----------- Nexus 9 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 1536px) 
  and (device-height: 2048px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Portrait */
@media screen 
  and (device-width: 1536px) 
  and (device-height: 2048px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: portrait) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Landscape */
@media screen 
  and (device-width: 1536px) 
  and (device-height: 2048px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: landscape) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* ----------- Kindle Fire HD 7" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 800px) 
  and (max-device-width: 1280px) 
  and (-webkit-min-device-pixel-ratio: 1.5) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Portrait */
@media only screen 
  and (min-device-width: 800px) 
  and (max-device-width: 1280px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: portrait) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Landscape */
@media only screen 
  and (min-device-width: 800px) 
  and (max-device-width: 1280px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: landscape) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* ----------- Kindle Fire HD 8.9" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1.5) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Portrait */
@media only screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: portrait) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Landscape */
@media only screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: landscape) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* ----------- Windows Phone ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 480px) 
  and (device-height: 800px) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Portrait */
@media screen 
  and (device-width: 480px) 
  and (device-height: 800px)  
  and (orientation: portrait) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

/* Landscape */
@media screen 
  and (device-width: 480px) 
  and (device-height: 800px) 
  and (orientation: landscape) {
    .App {
      display: grid;
      grid-template-columns: 2vw auto 2vw;
      grid-template-rows: 4rem auto 2vh auto 2vh;
      grid-template-areas:
        "header header header"
        "nav nav nav"
        ". . ."
        ". main ."
        ". . .";
    }
}

@media (max-width: 575px) {
  .modal-90w {
    max-width: 100%;
  }
}

* {
  padding: 0px;
  margin: 0px;
}

`;
