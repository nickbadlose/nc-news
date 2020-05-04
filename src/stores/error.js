import { decorate, observable } from "mobx";

export class Error {
  constructor() {
    this.err = null;
  }
}

decorate(Error, {
  err: observable,
});

export const errorStore = new Error();
