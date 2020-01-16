import React from "react";
import Nav from "./Nav";
import Login from "./Login";

export default function Header({ loggedIn }) {
  return (
    <div className="header">
      <h1>NC NEWS!</h1>
      <Nav />
      <Login loggedIn={loggedIn} />
    </div>
  );
}
