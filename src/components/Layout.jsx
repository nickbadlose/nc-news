import React from "react";
import { layoutStore } from "../stores/layout";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { StyledForm } from "../styling/FilterForm.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  return (
    <StyledForm>
      <DropdownButton
        id="dropdown-basic-button"
        onSelect={layoutStore.handleLayout}
        title="Layout"
        size="sm"
        alignRight={true}
      >
        <Dropdown.Item eventKey="list">
          List <FontAwesomeIcon icon={faThList} />
        </Dropdown.Item>
        <Dropdown.Item eventKey="card">
          Card <FontAwesomeIcon icon={faTh} />
        </Dropdown.Item>
      </DropdownButton>
    </StyledForm>
  );
};

export default Layout;
