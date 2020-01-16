import axios from "axios";

const baseUrl = "https://simons-nc-news.herokuapp.com/api";

export const getArticles = (topic, sort_by) => {
  return axios
    .get(`${baseUrl}/articles`, {
      params: {
        topic,
        sort_by
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return axios.get(`${baseUrl}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getSingleArticle = id => {
  return axios.get(`${baseUrl}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsById = id => {
  return axios.get(`${baseUrl}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotesByID = (id, increment, card) => {
  return axios
    .patch(`${baseUrl}/${card}/${id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data;
    });
};

export const addCommentsById = (id, username, body) => {
  return axios
    .post(`${baseUrl}/articles/${id}/comments`, { username, body })
    .then(({ data }) => {
      return data.comment;
    });
};

export const destroyCommentsById = id => {
  return axios.delete(`${baseUrl}/comments/${id}`);
};
