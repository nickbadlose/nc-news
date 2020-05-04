import { decorate, observable } from "mobx";

export class Error {
  constructor() {
    this.err = { msg: "hey", status: 404 };
  }
}

decorate(Error, {
  err: observable,
});

export const errorStore = new Error();
