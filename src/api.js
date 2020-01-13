import axios from "axios";

const baseUrl = "https://simons-nc-news.herokuapp.com/api";

export const getArticles = () => {
  return axios.get(`${baseUrl}/articles`).then(({ data }) => {
    return data.articles;
  });
};
