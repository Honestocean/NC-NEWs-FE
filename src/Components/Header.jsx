import React from "react";
import Nav from "./Nav";

export default function Header({ loggedIn }) {
  return (
    <div className="header">
      <section className="innerHeader">
        {" "}
        <Nav loggedIn={loggedIn} />
      </section>
    </div>
  );
}
