import React, { Component } from "react";
import * as api from "../api";

export default class ArticlesList extends Component {
  state = { articles: [] };

  render() {
    console.log(this.state.articles, "in the render");
    return (
      <div>
        <h3>Articles List</h3>
        <ul>
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
                <p>{article.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  fetchAllArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}
