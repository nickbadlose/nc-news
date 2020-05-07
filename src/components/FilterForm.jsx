import React from "react";
import { articlesStore } from "../stores/articles";
import { observer } from "mobx-react";

const FilterForm = observer(({ article }) => {
  return (
    <form>
      <select
        onChange={(e) => articlesStore.handleChange(e)}
        value={
          articlesStore.order
            ? `${articlesStore.sort_by}/${articlesStore.order}`
            : articlesStore.sort_by
        }
      >
        <option value="created_at">Newest</option>
        <option value="created_at/asc">Oldest</option>
        <option value="votes">Popular</option>
        {article && <option value="comment_count">Conversational</option>}
      </select>
    </form>
  );
});

export default FilterForm;
