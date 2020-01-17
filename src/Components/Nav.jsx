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
        <div className="innerMenu">
          {" "}
          <Link to="/">
            <h2>Home |</h2>{" "}
          </Link>
          <Link to="/articles">
            <h2>| Articles </h2>
          </Link>
        </div>

        <ul className="topicList">
          {" "}
          {this.state.topics.map(topic => {
            return (
              <li key={topic.slug}>
                <h2>
                  <Link className="homeboy" to={`/articles/${topic.slug}`}>
                    {" "}
                    {topic.slug}{" "}
                  </Link>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
