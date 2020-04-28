import React, { Component } from "react";
import * as api from "../api";
import { searchStore } from "../stores/search";

class SearchPage extends Component {
  state = {
    isLoading: true,
    searchData: [],
  };
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : this.state.searchData.length ? (
          <ul>
            {this.state.searchData.map((data) => {
              return (
                <li key={this.state.searchData.indexOf(data)}>
                  {data.slug ? (
                    <p>Topic - {data.slug}</p>
                  ) : data.username ? (
                    <p>User - {data.username}</p>
                  ) : data.author === this.props.search ? (
                    <p>
                      {data.author} - {data.title}
                    </p>
                  ) : (
                    <p>Article - {data.title}</p>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Sorry your search didn't match any documents.</p>
        )}
      </div>
    );
  }

  componentDidMount() {
    api.search(this.props.search).then(({ data }) => {
      this.setState({ isLoading: false, searchData: data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      this.setState({ isLoading: true });
      api.search(this.props.search).then(({ data }) => {
        this.setState({ isLoading: false, searchData: data });
      });
    }
  }

  componentWillUnmount() {
    searchStore.search = "";
  }
}

export default SearchPage;
