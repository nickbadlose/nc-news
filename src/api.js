import axios from "axios";

const baseUrl = "https://not-quite-reddit.herokuapp.com/api";

export const getArticles = (sort_by, order) => {
  return axios
    .get(`${baseUrl}/articles`, {
      params: { sort_by, order }
    })
    .catch(err => {
      console.dir(err);
    });
};

export const getArticleById = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}`).catch(err => {
    console.dir(err);
  });
};

export const getCommentsByArticleById = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}/comments`).catch(err => {
    console.dir(err);
  });
};
