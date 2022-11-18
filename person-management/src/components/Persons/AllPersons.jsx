import React, { useState } from "react";
import PersonCard from "../Cards/PersonCard";
import SearchbarInput from "../Others/SearchbarInput";
import GoBackArrow from "../Shared/GoBackArrow";
import style from './../../css/AllPersons.module.css'

const AllPersons = (props) => {
  const [searchText, setSearchText] = useState("");

  const OnHandlerSearchText = (searchText) => {
    setSearchText(searchText);
  }

  return (
    <>
      <GoBackArrow location={"allPersons"} allPersons={props.GoBack} />
      <SearchbarInput OnHandlerSearchText={OnHandlerSearchText} />
      <div className={`row ${style.personContainer} scrollbar`}>
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
