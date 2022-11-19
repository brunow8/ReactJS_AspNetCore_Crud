import React from "react";
import style from "./../../css/HomePage.module.css";

const ViewPersonsCard = (props) => {
  const GoTo = (data) => {
    props.GoTo(data);
  };
  return (
    <div className={`col-12 col-md-6 ${style.homePageColumn}`}>
      <div className={`${style.cardPerson}`} onClick={() => GoTo("allPersons")}>
        <div className={`${style.icon}`}>
          <span className={`material-icons ${style.personIcon}`}>people</span>
        </div>
        <p className={`${style.title}`}>All Persons</p>
        <p className={`${style.text}`}>
          Click here to view, edit or delete all persons.
        </p>
      </div>
    </div>
  );
};

export default ViewPersonsCard;
