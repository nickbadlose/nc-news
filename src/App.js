import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Routes from "./components/Routes";
import SideBar from "./components/SideBar";
import "./App.css";

class App extends Component {
  state = {
    username: "",
  };
  render() {
    const { username } = this.state;
    const { logIn, logOut } = this;
    return (
      <div className="App">
        <Header />
        <Nav username={username} />
        <div className="Header-side"></div>
        <div className="Nav-side"></div>
        <SideBar />
        <Routes logIn={logIn} username={username} logOut={logOut} />
      </div>
    );
  }

  logIn = (username) => {
    this.setState({ username });
  };

  logOut = () => {
    this.setState({ username: "" });
  };
}

export default App;
