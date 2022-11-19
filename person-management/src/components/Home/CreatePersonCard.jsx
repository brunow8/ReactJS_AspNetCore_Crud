import React from "react";
import style from "./../../css/HomePage.module.css";
const CreatePersonCard = (props) => {
  const GoTo = (data) => {
    props.GoTo(data);
  };
  return (
    <div className={`col-12 col-md-6 ${style.homePageColumn}`}>
      <div
        className={`${style.cardPerson}`}
        onClick={() => GoTo("createPerson")}
      >
        <div className={`${style.icon}`}>
          <span className={`material-icons ${style.personIcon}`}>
            person_add
          </span>
        </div>
        <p className={`${style.title}`}>Create Person</p>
        <p className={`${style.text}`}>Click here to add a new person.</p>
      </div>
    </div>
  );
};

export default CreatePersonCard;
