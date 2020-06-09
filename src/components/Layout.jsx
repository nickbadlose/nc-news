import React from "react";
import { layoutStore } from "../stores/layout";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { StyledForm } from "../styling/Layout.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { observer } from "mobx-react";

const Layout = observer(() => {
  return (
    <StyledForm>
      <OverlayTrigger overlay={<Tooltip id="tooltip">Change layout!</Tooltip>}>
        <DropdownButton
          id="dropdown-basic-button"
          onSelect={layoutStore.handleLayout}
          title={
            <FontAwesomeIcon
              icon={layoutStore.layout === "list" ? faThList : faTh}
            />
          }
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
      </OverlayTrigger>
    </StyledForm>
  );
});

export default Layout;
