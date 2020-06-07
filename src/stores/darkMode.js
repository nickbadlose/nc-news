import { decorate, observable } from "mobx";

export class dark {
  constructor(
    initialDarkMode = localStorage.darkMode
      ? JSON.parse(localStorage.darkMode)
      : false
  ) {
    this.darkMode = initialDarkMode;
  }

  handleDarkMode = () => {
    this.darkMode = !this.darkMode;
    localStorage.setItem("darkMode", this.darkMode);
  };
}

decorate(dark, {
  darkMode: observable,
});

export const darkStore = new dark();
