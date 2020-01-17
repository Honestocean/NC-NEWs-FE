import Voter from "./Voter";
import CommentsDeleter from "./CommentsDeleter";
import moment from "moment";
import React, { Component } from "react";

export default class CommentsCard extends Component {
  state = { deletedComment: null };

  render() {
    const { comment } = this.props;
    const { deletedComment } = this.state;
    const { loggedIn } = this.props;
    if (comment.comment_id === deletedComment)
      return <p>{comment.author}'s comment deleted!</p>;
    return (
      <div className="commentsList">
        <li className="commentsCard" key={comment.comment_id}>
          <section className="commentCardTop">
            <p>User: {comment.author}</p>
            <p>{moment(comment.created_at).format("MMM Do YYYY")}</p>
          </section>
          <p>{comment.body}</p>
          <div className="commentsCardBottom">
            <CommentsDeleter
              author={comment.author}
              loggedIn={loggedIn}
              id={comment.comment_id}
              setDeletedComment={this.setDeletedComment}
            />
            <Voter
              id={comment.comment_id}
              votes={comment.votes}
              card="comments"
            />
          </div>
        </li>
      </div>
    );
  }

  setDeletedComment = id => {
    this.setState({ deletedComment: id });
  };
}
