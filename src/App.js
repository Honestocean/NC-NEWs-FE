import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <ArticlesList />
      <Home />
    </div>
  );
}

export default App;
