import axios from "axios";
import { userStore } from "./stores/userinfo";

const baseUrl = "https://not-quite-reddit.herokuapp.com/api";

export const getArticles = (sort_by, order, topic, p, limit, author) => {
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

export const patchArticleById = (article_id, inc_votes, body) => {
  return axios
    .patch(`${baseUrl}/articles/${article_id}`, { inc_votes, body })
    .then((res) => res.data.article);
};

export const patchCommentById = (comment_id, inc_votes, body) => {
  return axios
    .patch(`${baseUrl}/comments/${comment_id}`, { inc_votes, body })
    .then((res) => res.data.comment);
};

export const fetchUsers = () => {
  return axios.get(`${baseUrl}/users`).then(({ data: { users } }) => {
    return users;
  });
};

export const getUser = (username) => {
  return axios
    .get(`${baseUrl}/users/${username}`)
    .then(({ data: { user } }) => {
      return user;
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

export const getTopics = (p, limit) => {
  return axios.get(`${baseUrl}/topics`, { params: { p, limit } });
};

export const postLogIn = (username, password) => {
  return axios
    .post(`${baseUrl}/login`, { username, password })
    .then((res) => res.data.token);
};

export const postArticleByTopic = (article) => {
  return axios
    .post(`${baseUrl}/articles`, article, {
      headers: { Authorization: "BEARER " + userStore.token },
    })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const removeArticleById = (article_id) => {
  return axios.delete(`${baseUrl}/articles/${article_id}`);
};

export const postTopic = (topic) => {
  return axios
    .post(`${baseUrl}/topics`, topic, {
      headers: { Authorization: "BEARER " + userStore.token },
    })
    .then(
      ({
        data: {
          topic: { slug },
        },
      }) => {
        return slug;
      }
    );
};

export const postUser = (newUser) => {
  return axios.post(`${baseUrl}/users`, newUser).then(({ data: { user } }) => {
    return user;
  });
};

export const getComments = (username) => {
  return axios
    .get(`${baseUrl}/comments/users/${username}`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const search = (search) => {
  return axios.get(`${baseUrl}/search`, {
    params: { search },
  });
};
