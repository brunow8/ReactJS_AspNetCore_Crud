import React, { useState, useEffect } from "react";
import PersonCard from "../Cards/PersonCard";
import SearchbarInput from "../Others/SearchbarInput";
import GoBackArrow from "../Shared/GoBackArrow";
import style from "./../../css/AllPersons.module.css";
import Swal from "sweetalert2";

const AllPersons = (props) => {
  const [initialPersons, setInitialPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const GetAllPersons = () => {
    setLoading(true);
    props
      .personAPI()
      .fetchAll()
      .then((res) => {
        setInitialPersons(res.data);
      });
      setLoading(false);
  };
  useEffect(() => {
    GetAllPersons();
  }, []);

  const OnHandlerSearchText = (searchText) => {
    setSearchText(searchText);
  };

  const deleteHandler = (data) => {
    //"data" is the person that he have to pass in the body request to the api call to delete the user from the database
    if (data.id !== 0) {
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
          props
            .personAPI()
            .delete(data.id)
            .then((res) => {
              if (res.data) {
                Swal.fire("Deleted!", "Person deleted with sucess!", "success");
                GetAllPersons();
              } else {
                Swal.fire(
                  "Error!",
                  "Unexpected error while trying to delete a person!",
                  "error"
                );
              }
            });
        }
      });
    }
  };

  const viewHandler = (person) => {
    props.personView(person);
  };
  const editHandler = (person) => {
    props.personEdit(person);
  };

  let content = "";
  if (loading) {
    content = (
      <div className="col-12 d-flex justify-content-center">
        <div className="loader"></div>
      </div>
    );
  } else if (
    initialPersons.filter((person) =>
      person.firstName
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    ).length === 0
  ) {
    content = (
      <h1
        className="d-flex justify-content-center"
        style={{ color: "#2f6e82", textAlign: "center" }}
      >
        Resultados não encontrados
      </h1>
    );
  } else {
    content = initialPersons
      .filter((person) =>
        person.firstName
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
      )
      .map((person, index) => {
        return (
          <PersonCard
            key={person.id}
            onHandlerView={viewHandler}
            onHandlerDeleteInput={deleteHandler}
            personDetails={person}
            editHandler={editHandler}
          />
        );
      });
  }
  return (
    <>
      <GoBackArrow location={"allPersons"} allPersons={props.GoBack} />
      <SearchbarInput OnHandlerSearchText={OnHandlerSearchText} />
      <div className={`row ${style.personContainer} scrollbar`}>{content}</div>
    </>
  );
};

export default AllPersons;
