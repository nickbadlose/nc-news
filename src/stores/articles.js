import { decorate, observable } from "mobx";

export class Articles {
  constructor() {
    this.articles = [];
    this.sort_by = undefined;
    this.order = undefined;
    this.topic = undefined;
    this.limit = undefined;
    this.page = 1;
    this.maxPage = null;
    this.isLoading = true;
  }

  initialiseState = () => {
    this.articles = [];
    this.page = 1;
    this.sort_by = undefined;
    this.order = undefined;
    this.topic = undefined;
    this.limit = undefined;
    this.maxPage = null;
    this.isLoading = true;
  };

  handleChange = (e) => {
    const [sort_by, order] = e.target.value.split("/");
    this.sort_by = sort_by;
    this.order = order;
  };
}

decorate(Articles, {
  articles: observable,
  isLoading: observable,
  page: observable,
  sort_by: observable,
  order: observable,
  topic: observable,
});

export const articlesStore = new Articles();
