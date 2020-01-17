import React, { Component } from "react";
import * as api from "../api";

export default class Voter extends Component {
  state = { voted: false, votesChange: 0 };

  handleVote = increment => {
    this.setState({ voted: true, votesChange: increment });
    const { card } = this.props;
    const { id } = this.props;
    api.patchVotesByID(id, increment, card);
  };

  render() {
    const { votes } = this.props;
    return (
      <div className="votes">
        <button
          disabled={this.state.voted}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          upvote
        </button>
        <p>Votes : {votes + this.state.votesChange}</p>
        <button
          disabled={this.state.voted}
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          downvote
        </button>
      </div>
    );
  }
}
