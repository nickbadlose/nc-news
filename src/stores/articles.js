import { decorate, observable } from "mobx";
import * as api from "../api";
import { errorStore } from "../stores/error";

export class Articles {
  constructor() {
    this.articles = [];
    this.sort_by = undefined;
    this.order = undefined;
    this.topic = undefined;
    this.limit = undefined;
    // this.page = 1;
    this.maxPage = null;
    this.isLoading = true;
  }

  initialiseState = () => {
    this.articles = [];
    this.sort_by = undefined;
    this.order = undefined;
    this.topic = undefined;
    this.limit = undefined;
    // this.page = 1;
    this.maxPage = null;
    this.isLoading = true;
  };

  updateArticles = (p) => {
    api
      .getArticles(this.sort_by, this.order, this.topic, this.limit, p)
      .then(({ data: { articles } }) => {
        this.articles = [...this.articles, ...articles];
      });
  };

  fetchArticles = () => {
    api
      .getArticles(this.sort_by, this.order, this.topic, this.limit, 1)
      .then(({ data: { articles, total_count } }) => {
        const maxPage = Math.ceil(total_count / 10);
        this.articles = articles;
        this.page = 1;
        this.maxPage = maxPage;
        this.isLoading = false;
      })
      .catch(({ response }) => {
        errorStore.err = {
          status: response.status,
          msg: response.data.msg,
        };
      });
  };
}

decorate(Articles, {
  articles: observable,
  isLoading: observable,
});

export const articlesStore = new Articles();
