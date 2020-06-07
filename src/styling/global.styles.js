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

/* .form-control-sm {
  background: black;
}

.form-control {
  background: black;
} */

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

.editCommentInput {
  min-height: 20vh;  /* Need to do modal styles globally, not sure why I didn't have to with editArticleForm styling for input but that seems to be an anomoly. I think the global styling is needed because when the modal is set to show it is a direct child of the body instead of the component it is in. This is just my thoughts, not certain */
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
  grid-template-columns: 8vw auto 160px 8vw;
  grid-template-rows: 4rem 3.5rem 2.5vw auto 2.5vw;
  grid-template-areas:
    "header header header header"
    "nav nav nav nav"
    ". . . ."
    ". main sidebar ."
    ". . . .";
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
    grid-template-columns: 2vw auto 160px 2vw;
    grid-template-rows: 4rem 3.5rem 2.5vw auto 2.5vw;
    grid-template-areas:
      "header header header header"
      "nav nav nav nav"
      ". . . ."
      ". main sidebar ."
      ". . . .";
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
