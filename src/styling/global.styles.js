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

@-moz-document url-prefix() {
  html {
    font-size: 14px;
  }
}

html {
  background-color: #eaeaea;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.App {
  /* background-color: #dae0e6; */
  background-color: #eaeaea;
  text-align: center;
  font-family: "Guardian Text Egyptian Web", Georgia, serif;
  color: rgba(0, 0, 0, 0.6);
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

@media (max-width: 950px) {
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

* {
  padding: 0px;
  margin: 0px;
}

`;
