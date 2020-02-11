import React, { Component } from "react";
import * as api from "../api";
import downvote from "../images/arrow_downward-24px.svg";
import upvote from "../images/arrow_upward-24px.svg";

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
        <p></p>
        <button
          disabled={this.state.voted}
          onClick={() => {
            this.handleVote(1);
          }}
        >
          <img src={upvote} alt="upvote" />
        </button>
        <p>Votes : {votes + this.state.votesChange}</p>
        <button
          className="upVote"
          disabled={this.state.voted}
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          <img src={downvote} alt="downvote" />
        </button>
        <p></p>
      </div>
    );
  }
}
