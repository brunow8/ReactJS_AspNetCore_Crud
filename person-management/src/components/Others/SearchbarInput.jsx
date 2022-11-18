import React, { useState } from "react";

const SearchbarInput = (props) => {
  const [searchText, setSearchText] = useState("");

  const OnHandlerChange = (e) => {
    setSearchText(e.target.value);
    props.OnHandlerSearchText(searchText);
  };

  const ClearText = () => {
    setSearchText("");
    props.OnHandlerSearchText(searchText);
  };

  return (
    <div className="col-12 d-flex justify-content-end">
      <form action="">
        <input
          placeholder="Search..."
          type="text"
          required
          value={searchText}
          onChange={OnHandlerChange}
        />
        <span
          className={`material-icons searchIcon ${
            searchText !== "" ? "takeOpacity" : "putOpacity"
          }`}
        >
          search
        </span>
        <span
          className={`material-icons closeSearch ${
            searchText !== "" ? "putOpcaity" : "takeOpacity"
          }`}
          onClick={ClearText}
        >
          close
        </span>
      </form>
    </div>
  );
};

export default SearchbarInput;
