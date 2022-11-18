import React, { useState } from "react";
import PersonCard from "../Cards/PersonCard";
import SearchbarInput from "../Others/SearchbarInput";
import GoBackArrow from "../Shared/GoBackArrow";

const AllPersons = (props) => {
  const [searchText, setSearchText] = useState("");

  const OnHandlerSearchText = (searchText) => {
    setSearchText(searchText);
  }

  return (
    <>
      <GoBackArrow location={"allPersons"} allPersons={props.GoBack} />
      <SearchbarInput OnHandlerSearchText={OnHandlerSearchText} />
      <div className="row personContainer scrollbar">
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>

      </div>
    </>
  );
};

export default AllPersons;
