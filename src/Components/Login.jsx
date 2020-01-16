import React from "react";

export default function Login({ loggedIn }) {
  if (loggedIn) return <h2>Logged in as {loggedIn}</h2>;
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
