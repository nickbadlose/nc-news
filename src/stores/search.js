import { decorate, observable } from "mobx";
import { navigate } from "@reach/router";

export class Search {
  constructor() {
    this.search = "";
    this.searchData = [];
  }

  handleChange = (e) => {
    this.search = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${this.search}`);
  };
}

decorate(Search, {
  search: observable,
});

export const searchStore = new Search();
