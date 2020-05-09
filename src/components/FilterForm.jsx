import React from "react";
import { articlesStore } from "../stores/articles";
import { observer } from "mobx-react";

const FilterForm = observer(({ article, handleChange, sort_by, order }) => {
  return (
    <form>
      <select
        onChange={(e) => handleChange(e)}
        value={order ? `${sort_by}/${order}` : sort_by}
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
