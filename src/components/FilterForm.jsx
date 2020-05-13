import React from "react";
import { useFilter } from "../hooks";

const FilterForm = ({ article, dispatch, sort_by, order }) => {
  const { handleChange } = useFilter(dispatch);
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
};

export default FilterForm;
