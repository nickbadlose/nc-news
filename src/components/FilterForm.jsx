import React, { Component } from "react";

class FilterForm extends Component {
  state = {
    sortBy: "created_at",
    orderBy: "desc",
  };
  render() {
    const { sortBy, orderBy } = this.state;
    const { handleChange } = this;
    const { article } = this.props;
    return (
      <form className="FilterForm">
        <label>
          Sort:
          <select
            value={sortBy}
            onChange={(event) => {
              handleChange(event.target);
            }}
            name="sortBy"
            className="filterFormSelect"
          >
            <option value="created_at" className="filterFormOption">
              created at
            </option>
            {article && (
              <option value="comment_count" className="filterFormOption">
                comment count
              </option>
            )}
            <option value="votes" className="filterFormOption">
              votes
            </option>
          </select>
        </label>
        <label>
          Order:
          <select
            value={orderBy}
            onChange={(event) => {
              handleChange(event.target);
            }}
            name="orderBy"
            className="filterFormSelect"
          >
            <option value="desc" className="filterFormOption">
              descending
            </option>
            <option value="asc" className="filterFormOption">
              ascending
            </option>
          </select>
        </label>
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

  handleChange = (target) => {
    target.name === "sortBy"
      ? this.setState({ sortBy: target.value })
      : this.setState({ orderBy: target.value });
  };
}

export default FilterForm;
