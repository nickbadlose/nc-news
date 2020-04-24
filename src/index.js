import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "mobx-react-lite/batchingForReactDom";
// import "mobx-react-lite/batchingOptOut";

ReactDOM.render(<App />, document.getElementById("root"));
