import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import SideBar from "./components/SideBar";
import "./App.css";
import { observer } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import * as api from "./api";
import { userStore } from "./stores/userinfo";

const App = observer(() => {
  useEffect(() => {
    api.fetchUsers().then((users) => {
      userStore.users = users;
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Navigation />
      <SideBar />
      <Routes />
    </div>
  );
});

export default App;
