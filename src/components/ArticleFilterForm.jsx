import React, { Component } from "react";

class ArticleFilterForm extends Component {
  state = {
    sortBy: "created_at",
    orderBy: "desc"
  };
  render() {
    const { sortBy, orderBy } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Sort by:
          <select
            value={sortBy}
            onChange={event => {
              handleChange(event.target);
            }}
            name="sortBy"
          >
            <option value="created_at">created at</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
          </select>
        </label>
        <label>
          Order by:
          <select
            value={orderBy}
            onChange={event => {
              handleChange(event.target);
            }}
            name="orderBy"
          >
            <option value="desc">descending</option>
            <option value="asc">ascending</option>
          </select>
        </label>
      </form>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortBy, orderBy } = this.state;
    const { fetchArticles } = this.props;
    if (prevState.sortBy !== sortBy || prevState.orderBy !== orderBy)
      fetchArticles(sortBy, orderBy);
  }

  handleChange = target => {
    target.name === "sortBy"
      ? this.setState({ sortBy: target.value })
      : this.setState({ orderBy: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
}

export default ArticleFilterForm;
