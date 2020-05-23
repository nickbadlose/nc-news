import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import SideBar from "./components/SideBar";
import "./App.css";
import { observer } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as api from "./api";
import { userStore } from "./stores/userinfo";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styling/themes.styling";

const App = observer(() => {
  const isMounted = useRef(true);

  useEffect(() => {
    api.fetchUsers().then((users) => {
      if (isMounted.current) {
        userStore.users = users;
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <Header />
        <Navigation />
        <SideBar />
        <Routes />
      </div>
    </ThemeProvider>
  );
});

export default App;
