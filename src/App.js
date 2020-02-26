import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Routes from "./components/Routes";

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
        <Routes logIn={logIn} />
      </>
    );
  }

  logIn = username => {
    this.setState({ username });
  };
}

export default App;
