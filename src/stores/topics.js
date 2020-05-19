import * as api from "../api";
import { decorate, observable } from "mobx";

export class topics {
  constructor() {
    this.topics = [];
    this.images = {};
  }

  fetchTopics = () => {
    api.getTopics().then(({ data: { topics } }) => {
      this.topics = topics;
      this.images = this.topics.reduce((obj, topic) => {
        obj[topic.slug] = topic.image_url;
        return obj;
      }, {});
    });
  };
}

decorate(topics, {
  topics: observable,
  topicImages: observable,
});

export const topicsStore = new topics();
