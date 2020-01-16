import React, { Component } from "react";
import * as api from "../api";
import SingleArticleCard from "./SingleArticleCard";
import CommentsList from "./CommentsList";
import CommentsTogler from "./CommentsToggler";

export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }

  fetchSingleArticle = () => {
    const { id } = this.props;

    api
      .getSingleArticle(id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        });
      });
  };

  render() {
    const { loggedIn } = this.props;
    if (this.state.isLoading) return <p>Loading</p>;
    if (this.state.err) {
      const { msg } = this.state.err;
      const { status } = this.state.err;
      return (
        <p>
          {status} : {msg}
        </p>
      );
    }

    return (
      <div className="singleArticle">
        <SingleArticleCard article={this.state.article} />

        <CommentsTogler>
          {" "}
          <CommentsList id={this.props.id} loggedIn={loggedIn} />
        </CommentsTogler>
      </div>
    );
  }
}
