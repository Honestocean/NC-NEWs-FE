import React from "react";

export default function Login({ loggedIn }) {
  if (loggedIn) return <h5 className="log">Welcome {loggedIn}!</h5>;
  return (
    <div>
      <h2 className="log">Login</h2>
    </div>
  );
}
