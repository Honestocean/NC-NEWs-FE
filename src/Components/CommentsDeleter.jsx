import React from "react";
import * as api from "../api";

export default function CommentsDeleter({ id, setDeletedComment }) {
  const deleteComments = () => {
    setDeletedComment(id);
    api.destroyCommentsById(id).then(res => {});
  };
  return (
    <div>
      <button onClick={deleteComments}>Delete</button>
    </div>
  );
}
