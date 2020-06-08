import React from "react";
import { useFilter } from "../hooks";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { StyledForm } from "../styling/FilterForm.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCommentDots,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const FilterForm = ({ article, dispatch, order, sort_by }) => {
  const { handleSelect } = useFilter(dispatch);
  return (
    <StyledForm>
      <OverlayTrigger overlay={<Tooltip id="tooltip">Sort by!</Tooltip>}>
        <DropdownButton
          id="dropdown-basic-button"
          onSelect={handleSelect}
          title={
            order === "asc" ? (
              <FontAwesomeIcon icon={faClock} className="filterIcon" />
            ) : sort_by === "created_at" ? (
              <FontAwesomeIcon icon={faClock} className="filterIcon" />
            ) : sort_by === "votes" ? (
              <FontAwesomeIcon icon={faHeart} className="filterIcon" />
            ) : (
              <FontAwesomeIcon icon={faCommentDots} className="filterIcon" />
            )
          }
          size="sm"
          alignRight={article}
          className={!article && "comments"}
        >
          <Dropdown.Item eventKey="created_at">
            New <FontAwesomeIcon icon={faClock} className="filterIcon" />
          </Dropdown.Item>
          <Dropdown.Item eventKey="created_at/asc">
            Old <FontAwesomeIcon icon={faClock} className="filterIcon" />
          </Dropdown.Item>
          <Dropdown.Item eventKey="votes">
            Popular <FontAwesomeIcon icon={faHeart} className="filterIcon" />
          </Dropdown.Item>
          {article && (
            <Dropdown.Item eventKey="comment_count">
              Conversational{" "}
              <FontAwesomeIcon icon={faCommentDots} className="filterIcon" />
            </Dropdown.Item>
          )}
        </DropdownButton>
      </OverlayTrigger>
    </StyledForm>
  );
};

export default FilterForm;
