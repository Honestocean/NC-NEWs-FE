import React from "react";
import Voter from "./Voter";

export default function SingleArticleCard(props) {
  return (
    <div className="singleArticleCard">
      <h3>{props.article.title}</h3>
      <p>{props.article.body}</p>
      <p>Comments :{props.article.comment_count}</p>
      <Voter
        id={props.article.id}
        card={"articles"}
        votes={props.article.votes}
      />
    </div>
  );
}
