import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default class ArticlesList extends Component {
  state = { articles: [], sortBy: null };

  render() {
    return (
      <div className="articleList">
        <h3>Articles List</h3>
        <select onChange={this.sortArticles}>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
        </select>
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchAllArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy } = this.state;
    if (
      this.props.topic !== prevProps.topic ||
      this.state.sortBy !== prevState.sortBy
    ) {
      this.fetchAllArticles(topic, sortBy);
    }
  }

  fetchAllArticles = (topic, sortBy) => {
    api.getArticles(topic, sortBy).then(articles => {
      this.setState({ articles });
    });
  };

  sortArticles = event => {
    const { value } = event.target;
    this.setState({ sortBy: value });
  };
}
