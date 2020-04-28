import React from "react";
import { searchStore } from "../stores/search";
import { observer } from "mobx-react";

const SearchBox = observer(() => {
  return (
    <div>
      <form onSubmit={searchStore.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Search"
            value={searchStore.search}
            onChange={searchStore.handleChange}
            required
          />
        </label>
        <button>Go!</button>
      </form>
    </div>
  );
});

export default SearchBox;
