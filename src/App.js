import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Routes from "./components/Routes";
import SideBar from "./components/SideBar";

class App extends Component {
  state = {
    username: ""
  };
  render() {
    const { username } = this.state;
    const { logIn } = this;
    return (
      <>
        <Header />
        <Nav username={username} />
        <SideBar />
        <Routes logIn={logIn} username={username} />
      </>
    );
  }

  logIn = username => {
    this.setState({ username });
  };
}

export default App;
