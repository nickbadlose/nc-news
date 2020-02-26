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

export const patchArticleById = (article_id, inc_votes) => {
  return axios
    .patch(`${baseUrl}/articles/${article_id}`, { inc_votes })
    .then(res => res.data.article.votes)
    .catch(err => {
      console.dir(err);
    });
};

export const patchCommentByArticleId = (comment_id, inc_votes) => {
  return axios
    .patch(`${baseUrl}/comments/${comment_id}`, { inc_votes })
    .then(res => res.data.comment.votes)
    .catch(err => {
      console.dir(err);
    });
};

export const fetchUsers = () => {
  return axios
    .patch(`${baseUrl}/comments/${comment_id}`, { inc_votes })
    .then(res => res.data.comment.votes)
    .catch(err => {
      console.dir(err);
    });
};
