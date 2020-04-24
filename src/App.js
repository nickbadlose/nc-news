import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Routes from "./components/Routes";
import SideBar from "./components/SideBar";
import "./App.css";
import { observer } from "mobx-react";

const App = observer(() => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="Header-side"></div>
      <div className="Nav-side"></div>
      <SideBar />
      <Routes />
    </div>
  );
});

export default App;
