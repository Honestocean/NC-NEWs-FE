import React, { Component } from "react";

export default class CommentsToggler extends Component {
  state = { display: false };

  toggleComment = () => {
    this.setState(currentState => {
      return { display: !currentState.display };
    });
  };

  render() {
    const { display } = this.state;
    const { children } = this.props;
    return (
      <div>
        <button onClick={this.toggleComment}>
          {display ? "Hide comments" : "View Comments"}
        </button>
        {display && children}
      </div>
    );
  }
}
