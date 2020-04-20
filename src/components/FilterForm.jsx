import React, { Component } from "react";

class FilterForm extends Component {
  state = {
    sortBy: "",
    orderBy: "",
  };
  render() {
    const { handleChange } = this;
    const { sortBy, orderBy } = this.state;
    const { article } = this.props;
    return (
      <form className="FilterForm">
        <select
          onChange={handleChange}
          className="filterFormSelect"
          value={orderBy ? `${sortBy}/${orderBy}` : sortBy}
        >
          <option value="created_at" className="filterFormOption">
            Newest
          </option>
          <option value="created_at/asc" className="filterFormOption">
            Oldest
          </option>
          <option value="votes" className="filterFormOption">
            Popular
          </option>
          {article && (
            <option value="comment_count" className="filterFormOption">
              Conversational
            </option>
          )}
        </select>
      </form>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortBy, orderBy } = this.state;
    const {
      fetchArticles,
      fetchCommentsByArticleId,
      article_id,
      topic,
    } = this.props;
    if (prevProps.topic !== topic) {
      this.setState({
        sortBy: "created_at",
        orderBy: "desc",
      });
    }
    if (fetchArticles) {
      if (prevState.sortBy !== sortBy || prevState.orderBy !== orderBy) {
        fetchArticles(sortBy, orderBy);
      }
    } else if (fetchCommentsByArticleId) {
      if (prevState.sortBy !== sortBy || prevState.orderBy !== orderBy) {
        fetchCommentsByArticleId(article_id, sortBy, orderBy);
      }
    }
  }

  handleChange = (event) => {
    const separatedValue = event.target.value.split("/");
    this.setState({ sortBy: separatedValue[0], orderBy: separatedValue[1] });
  };
}

export default FilterForm;
