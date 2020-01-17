import React from "react";
import * as api from "../api";

export default function CommentsDeleter({
  id,
  setDeletedComment,
  loggedIn,
  author
}) {
  const deleteComments = () => {
    if (loggedIn === author) {
      setDeletedComment(id);
      api.destroyCommentsById(id);
    }
  };
  return (
    <div className="commentsDeleter">
      <button onClick={deleteComments}>Delete</button>
    </div>
  );
}
