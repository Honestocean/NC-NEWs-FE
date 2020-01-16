import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import Home from "./Components/Home";
import SingleArticle from "./Components/SingleArticle";

import React, { Component } from "react";

export default class App extends Component {
  state = { loggedIn: "weegembump" };
  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Router>
          <Home path="/" />
          <ArticlesList path="/articles" />
          <ArticlesList path="articles/:topic" />
          <SingleArticle path="/:id" loggedIn={loggedIn} />
        </Router>
      </div>
    );
  }
}
