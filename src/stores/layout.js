import { decorate, observable } from "mobx";

export class layout {
  constructor(initialLayout = localStorage.layout || "list") {
    this.layout = initialLayout;
  }

  handleLayout = (eKey) => {
    this.layout = eKey;
    localStorage.setItem("layout", eKey);
  };
}

decorate(layout, {
  layout: observable,
});

export const layoutStore = new layout();
