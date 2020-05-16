import React from "react";
import { useFilter } from "../hooks";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { StyledForm } from "../styling/FilterForm.styles";

const FilterForm = ({ article, dispatch, sort_by, order }) => {
  const { handleSelect } = useFilter(dispatch);
  return (
    <StyledForm>
      <DropdownButton
        id="dropdown-basic-button"
        onSelect={handleSelect}
        title="Sort by"
        // title={order ? `${sort_by}/${order}` : sort_by}
        size="sm"
        alignRight={true}
      >
        <Dropdown.Item eventKey="created_at">Newest</Dropdown.Item>
        <Dropdown.Item eventKey="created_at/asc">Oldest</Dropdown.Item>
        <Dropdown.Item eventKey="votes">Popular</Dropdown.Item>
        {article && (
          <Dropdown.Item eventKey="comment_count">Conversational</Dropdown.Item>
        )}
      </DropdownButton>
    </StyledForm>
  );
};

export default FilterForm;
