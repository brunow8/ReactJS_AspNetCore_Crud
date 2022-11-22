import React, { useState } from "react";
import PersonCard from "../Cards/PersonCard";
import SearchbarInput from "../Others/SearchbarInput";
import GoBackArrow from "../Shared/GoBackArrow";
import style from "./../../css/AllPersons.module.css";
import Swal from "sweetalert2";


const AllPersons = (props) => {
  const [searchText, setSearchText] = useState("");

  const OnHandlerSearchText = (searchText) => {
    setSearchText(searchText);
  };


  const deleteHandler = (data) => {
    //"data" is the person that he have to pass in the body request to the api call to delete the user from the database
    Swal.fire({
      title: "Are you sure you want to delete this person?",
      text: "If deleted you won’t be able to recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DB4E4E",
      cancelButtonColor: "#898282",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Person deleted with sucess!", "success");
        //API CALL TO DELETE USER FROM THE DATABASE
      }
    });
  };

  const viewHandler = (person) => {
    props.personView(person);
  }
  const editHandler = (person) => {
    props.personEdit(person);
  }

  return (
    <>
      <GoBackArrow location={"allPersons"} allPersons={props.GoBack} />
      <SearchbarInput OnHandlerSearchText={OnHandlerSearchText} />
      <div className={`row ${style.personContainer} scrollbar`}>
        {props.initialPersons.length === 0 && <h1 className="d-flex justify-content-center" style={{color: "#2f6e82"}}>Resultados não encontrados</h1>}
        {props.initialPersons.filter(person => person.firstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).length === 0 && <h1 className="d-flex justify-content-center" style={{color: "#2f6e82"}}>Resultados não encontrados</h1>}
        {props.initialPersons.filter(person => person.firstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).map((person, index) => {
          return(
            <PersonCard key={person.id} onHandlerView={viewHandler} onHandlerDeleteInput={deleteHandler} personDetails={person} editHandler={editHandler}/>
          )
        })}
      </div>
    </>
  );
};

export default AllPersons;
