import axios from "axios";

const baseUrl = "https://not-quite-reddit.herokuapp.com/api";

export const getArticles = (sort_by, order, topic, limit) => {
  return axios
    .get(`${baseUrl}/articles`, {
      params: { sort_by, order, topic, limit }
    })
    .catch(err => {
      console.dir(err);
    });
};

export const getArticleById = article_id => {
  return axios.get(`${baseUrl}/articles/${article_id}`);
};

export const getCommentsByArticleId = (article_id, sort_by, order) => {
  return axios.get(`${baseUrl}/articles/${article_id}/comments`, {
    params: { sort_by, order }
  });
};

export const patchArticleById = (article_id, inc_votes) => {
  return axios
    .patch(`${baseUrl}/articles/${article_id}`, { inc_votes })
    .then(res => res.data.article.votes);
};

export const patchCommentById = (comment_id, inc_votes) => {
  return axios.patch(`${baseUrl}/comments/${comment_id}`, { inc_votes });
};

export const fetchUsers = () => {
  return axios
    .get(`${baseUrl}/users`)
    .then(({ data: { users } }) => {
      return users;
    })
    .catch(err => {
      console.dir(err);
    });
};

export const postCommentByArticleId = (article_id, comment) => {
  return axios.post(`${baseUrl}/articles/${article_id}/comments`, comment);
};

export const removeCommentById = comment_id => {
  return axios.delete(`${baseUrl}/comments/${comment_id}`);
};

export const getTopics = () => {
  return axios.get(`${baseUrl}/topics`).catch(err => {
    console.dir(err);
  });
};
