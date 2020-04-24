import axios from "axios";
import { userStore } from "./stores/userinfo";

const baseUrl = "https://not-quite-reddit.herokuapp.com/api";

export const getArticles = (sort_by, order, topic, limit, p, author) => {
  return axios.get(`${baseUrl}/articles`, {
    params: { sort_by, order, topic, limit, p, author },
  });
};

export const getArticleById = (article_id) => {
  return axios.get(`${baseUrl}/articles/${article_id}`);
};

export const getCommentsByArticleId = (article_id, sort_by, order, p) => {
  return axios.get(`${baseUrl}/articles/${article_id}/comments`, {
    params: { sort_by, order, p },
  });
};

export const patchArticleById = (article_id, inc_votes) => {
  return axios
    .patch(`${baseUrl}/articles/${article_id}`, { inc_votes })
    .then((res) => res.data.article.votes);
};

export const patchCommentById = (comment_id, inc_votes) => {
  return axios.patch(`${baseUrl}/comments/${comment_id}`, { inc_votes });
};

export const fetchUsers = () => {
  return axios.get(`${baseUrl}/users`).then(({ data: { users } }) => {
    return users;
  });
};

export const postCommentByArticleId = (article_id, comment) => {
  return axios.post(`${baseUrl}/articles/${article_id}/comments`, comment, {
    headers: { Authorization: "BEARER " + userStore.token },
  });
};

export const removeCommentById = (comment_id) => {
  return axios.delete(`${baseUrl}/comments/${comment_id}`);
};

export const getTopics = () => {
  return axios.get(`${baseUrl}/topics`);
};

export const postLogIn = (username, password) => {
  return axios
    .post(`${baseUrl}/login`, { username, password })
    .then((res) => res.data.token);
};
