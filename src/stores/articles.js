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
    this.page = 1;
    this.maxPage = null;
  }

  initialiseState = () => {
    this.articles = [];
    this.sort_by = undefined;
    this.order = undefined;
    this.topic = undefined;
    this.limit = undefined;
    this.page = 1;
    this.maxPage = null;
    this.isLoading = true;
  };

  fetchArticles = (sort_by, order, topic, limit, author) => {
    api
      .getArticles(sort_by, order, topic, limit, 1, author)
      .then(({ data: { articles, total_count } }) => {
        const maxPage = Math.ceil(total_count / 10);
        this.articles = articles;
        this.sort_by = sort_by;
        this.order = order;
        this.topic = topic;
        this.limit = limit;
        this.page = 1;
        this.maxPage = maxPage;
        this.isLoading = false;
      })
      .catch(({ response }) => {
        errorStore.err = { status: response.status, msg: response.data.msg };
      });
  };
}

decorate(Articles, {
  articles: observable,
});

export const articlesStore = new Articles();
