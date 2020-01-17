import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

export default function ArticleCard({ article }) {
  return (
    <li key={article.article_id} className="articleCard">
      <Link to={`/${article.article_id}`}>
        <h4>{article.title}</h4>
        <p>{article.body.slice(0, 80)}...</p>
        <p>User: {article.author}</p>
        <p>Date: {article.created_at}</p>
      </Link>
      <Voter votes={article.votes} id={article.article_id} card="articles" />
    </li>
  );
  //maybe make a function to split it up the body sample by votes
}
