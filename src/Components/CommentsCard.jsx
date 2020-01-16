import Voter from "./Voter";
import CommentsDeleter from "./CommentsDeleter";

import React, { Component } from "react";

export default class CommentsCard extends Component {
  state = { deletedComment: null };

  render() {
    const { comment } = this.props;
    const { deletedComment } = this.state;
    if (comment.comment_id === deletedComment)
      return <p>{comment.author}'s comment deleted!</p>;
    return (
      <div className="commentsCard">
        <li key={comment.comment_id}>
          <p>{comment.author}</p>
          <p>{comment.body}</p>
          <Voter
            id={comment.comment_id}
            votes={comment.votes}
            card="comments"
          />
          <CommentsDeleter
            id={comment.comment_id}
            setDeletedComment={this.setDeletedComment}
          />
        </li>
      </div>
    );
  }

  setDeletedComment = id => {
    this.setState({ deletedComment: id });
  };
}
