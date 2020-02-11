import React from "react";
import news from "../images/utsav-srestha-HeNrEdA4Zp4-unsplash.jpg";

export default function Home() {
  return (
    <div className="homePage">
      <h2 className="homeboy">Welcome to NC News!</h2>
      <p className="intro">
        Welcome to my NC-NEWs! It's a social news aggregation site, designed for
        web content rating and discussion - not too dissimilar to Reddit. You
        can browse articles via their topics, upvote and downvote articles and
        comments. Even delete a comment if you are signed in with the right
        user! Please feel free to take a look around!{" "}
      </p>
      <img src={news} alt="newspaper" className="newspaper" />
    </div>
  );
}
