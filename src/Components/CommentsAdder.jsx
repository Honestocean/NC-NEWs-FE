import * as api from "../api";

import React, { Component } from "react";

export default class CommentsAdder extends Component {
  state = { body: "asd", user: this.props.loggedIn };

  render() {
    return (
      <div>
        <h3>Add comments</h3>
        <form onSubmit={this.submitComment}>
          <label htmlFor="Comment">Comment</label>
          <input type="text" name="Comment" onChange={this.passInfo}></input>
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
    });
  };

  passInfo = event => {
    this.setState({ body: event.target.value });
  };
}
