import * as api from "../api";

import React, { Component } from "react";

export default class CommentsAdder extends Component {
  state = { body: "", user: this.props.loggedIn };

  render() {
    return (
      <div>
        <form onSubmit={this.submitComment}>
          <label htmlFor="Comment">Make a Comment</label>
          <input
            value={this.state.body}
            type="text"
            name="Comment"
            onChange={this.passInfo}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  submitComment = event => {
    event.preventDefault();

    const { id } = this.props;
    const { user } = this.state;
    const { body } = this.state;

    api.addCommentsById(id, user, body).then(comment => {
      this.props.optimisticRender(comment);
      this.setState({ body: "" });
    });
  };

  passInfo = event => {
    this.setState({ body: event.target.value });
  };
}
