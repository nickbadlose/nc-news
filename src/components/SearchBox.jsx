import React from "react";
import { searchStore } from "../stores/search";
import { observer } from "mobx-react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = observer(() => {
  return (
    <div>
      {/* <form onSubmit={searchStore.handleSubmit}>
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
      </form> */}
      <InputGroup className="mb-3">
        <FormControl
          // className={styles.placeholderText}
          onChange={searchStore.handleChange}
          placeholder="Search..."
          aria-label="Search box"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button
            // className={styles.searchBoxButton}
            onClick={searchStore.handleSubmit}
            variant="primary"
          >
            Go!
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
});

export default SearchBox;
