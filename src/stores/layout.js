import { decorate, observable } from "mobx";

export class layout {
  constructor() {
    this.layout = "list";
  }

  handleLayout = (eKey) => {
    this.layout = eKey;
  };
}

decorate(layout, {
  layout: observable,
});

export const layoutStore = new layout();
