import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default class ArticlesList extends Component {
  state = { articles: [], sortBy: null, isLoading: true, err: null };

  render() {
    const { isLoading } = this.state;
    const { err } = this.state;

    if (isLoading) return <p className="homeboy">Loading</p>;
    if (err)
      return (
        <p>
          {err.status} : {err.msg}
        </p>
      );

    return (
      <div className="articleList">
        <h3>Articles</h3>
        <select onChange={this.sortArticles}>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
        </select>
        <ul className="list">
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const { topic } = this.props;
    const { sortBy } = this.state;
    this.fetchAllArticles(topic, sortBy);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy } = this.state;

    if (topic !== prevProps.topic || sortBy !== prevState.sortBy) {
      this.fetchAllArticles(topic, sortBy);
    }
  }

  fetchAllArticles = (topic, sortBy) => {
    api
      .getArticles(topic, sortBy)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        const { msg } = err.response.data;
        const { status } = err.response;

        this.setState({ err: { status, msg }, isLoading: false });
      });
  };

  sortArticles = event => {
    const { value } = event.target;
    this.setState({ sortBy: value });
  };
}
