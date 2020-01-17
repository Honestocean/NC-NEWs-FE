import React, { Component } from "react";
import * as api from "../api";
import CommentsCard from "./CommentsCard";
import CommentsAdder from "./CommentsAdder";

export default class CommentsList extends Component {
  state = { comments: [], isLoading: true, err: null };

  render() {
    const { loggedIn } = this.props;

    if (this.state.isLoading) return <p>Loading</p>;
    if (this.state.err)
      return (
        <p>
          {this.state.err.status} : {this.state.err.msg}
        </p>
      );

    return (
      <div className="commentsList">
        <CommentsAdder
          optimisticRender={this.optimisticRender}
          id={this.props.id}
          loggedIn={loggedIn}
        />
        <ul>
          {this.state.comments.map(comment => {
            return <CommentsCard comment={comment} loggedIn={loggedIn} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchCommentsById();
  }

  optimisticRender = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  fetchCommentsById = () => {
    const { id } = this.props;
    api
      .getCommentsById(id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.status },
          isLoading: false
        });
      });
  };
}
