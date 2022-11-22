import React, { useState } from "react";
import style from './../../css/AllPersons.module.css';

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
      <form className={style.formSearchBar} action="">
        <input
          className={style.inputSearchBar}
          placeholder="Search..."
          type="text"
          required
          value={searchText}
          onChange={OnHandlerChange}
        />
        <span
          className={`material-icons ${style.searchIcon} ${
            searchText !== "" ? `${style.takeOpacity}` : `${style.putOpacity}`
          }`}
        >
          search
        </span>
        <span
          className={`material-icons ${style.closeSearch} ${
            searchText !== "" ? `${style.putOpcaity}` : `${style.takeOpacity}`
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
