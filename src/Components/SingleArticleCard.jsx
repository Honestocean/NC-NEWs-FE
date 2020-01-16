import React from "react";

export default function SingleArticleCard(props) {
  return (
    <div className="singleArticleCard">
      <h3>{props.article.title}</h3>
      <p>{props.article.body}</p>
      <p>Votes : {props.article.votes}</p>
      <p>Comments :{props.article.comment_count}</p>
    </div>
  );
}
