import * as api from "../api";
import { decorate, observable } from "mobx";

export class UserInfo {
  constructor(
    initialUser = localStorage.username || "",
    initialToken = localStorage.token || null
  ) {
    this.username = initialUser;
    this.token = initialToken;
  }

  logIn = (username, password) => {
    return api.postLogIn(username, password).then((token) => {
      this.username = username;
      this.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
    });
  };

  logOut = () => {
    this.username = "";
    localStorage.clear();
  };
}

decorate(UserInfo, {
  username: observable,
});

export const userStore = new UserInfo();
