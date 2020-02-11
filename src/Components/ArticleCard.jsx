import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import moment from "moment";

export default function ArticleCard({ article }) {
  return (
    <li className="articleCard">
      <Link to={`/${article.article_id}`} className="articleLink">
        <div className="articleCardTop">
          <p></p>
          <h4>{article.title}</h4>
          <p>User: {article.author}</p>
        </div>
        <p>{article.body.slice(0, 80)}...</p>
      </Link>
      <div className="articleCardBottom">
        <p>Created at: {moment(article.created_at).format("MMM Do YYYY")}</p>
        <Voter votes={article.votes} id={article.article_id} card="articles" />
      </div>
    </li>
  );
  //maybe make a function to split it up the body sample by votes
}
