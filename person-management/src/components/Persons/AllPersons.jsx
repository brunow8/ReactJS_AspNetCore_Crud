import React, { useState } from "react";
import PersonCard from "../Cards/PersonCard";
import SearchbarInput from "../Others/SearchbarInput";
import GoBackArrow from "../Shared/GoBackArrow";
import style from "./../../css/AllPersons.module.css";
import Swal from "sweetalert2";


const AllPersons = (props) => {
  const [initialPersons, setInitialPersons] = useState([
    {
      id: "1",
      firstName: "Bruno",
      lastName: "Barbosa",
      birthday: "13/03/1999",
      gender: "Male",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
    {
      id: "2",
      firstName: "Tiago",
      lastName: "Silva",
      birthday: "13/03/1999",
      gender: "Male",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
    {
      id: "3",
      firstName: "Catarina",
      lastName: "Rodrigues",
      birthday: "13/03/1999",
      gender: "Female",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
    {
      id: "4",
      firstName: "Silvía",
      lastName: "Campos",
      birthday: "13/03/1999",
      gender: "Other",
      nif: "987654321",
      cellphone: "987654321",
      zipcode: "4421-003",
      streetAddress: "Rua das Flores 753",
      email: "example@gmail.com",
      photo: "personImage.jfif",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const OnHandlerSearchText = (searchText) => {
    setSearchText(searchText);
  };

  const deleteHandler = (data) => {
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
      }
    });
  };
  return (
    <>
      <GoBackArrow location={"allPersons"} allPersons={props.GoBack} />
      <SearchbarInput OnHandlerSearchText={OnHandlerSearchText} />
      <div className={`row ${style.personContainer} scrollbar`}>
        {initialPersons.filter(person => person.firstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).map((person, index) => {
          return(
            <PersonCard key={person.id} onHandlerInput={deleteHandler} personDetails={person}/>
          )
        })}
      </div>
    </>
  );
};

export default AllPersons;
