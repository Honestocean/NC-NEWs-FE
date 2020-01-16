import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

export default class Nav extends Component {
  state = { topics: [] };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };

  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <h2>Home </h2>{" "}
        </Link>
        <Link to="/articles">
          <h2> Articles</h2>
        </Link>
        <ul className="topicList">
          {" "}
          {this.state.topics.map(topic => {
            return (
              <li key={topic.slug}>
                <h2>
                  <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
                </h2>
              </li>
            );
          })}
        </ul>

        {/* <h2>Cooking</h2>
        <h2>Football</h2>
        <h2>Coding</h2> */}
      </div>
    );
  }
}
