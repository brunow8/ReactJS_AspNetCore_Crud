import React from "react";
import personImage from "./../../images/personImage.jfif";
import style from "./../../css/AllPersons.module.css";

const PersonCard = (props) => {
  const deletePerson = (data) => {
    props.onHandlerDeleteInput(data);
  };
  const viewPerson = (data) => {
    props.onHandlerView(data);
  };
  const editPerson = (data) => {
    props.editHandler(data);
  };
  return (
    <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
      <div className={`${style.personCard} mt-2`}>
        <div>
          <div className="d-flex justify-content-center">
            <img
              src={personImage}
              alt="PersonImage"
              className={style.imagePersonCard}
            />
          </div>
          <div className="d-flex justify-content-center">
            <h4 className={style.namePersonCard}>
              {props.personDetails.firstName}
            </h4>
          </div>
          <div className="d-flex justify-content-center">
            <h4 className={style.namePersonCard}>
              {props.personDetails.lastName}
            </h4>
          </div>
          <div
            className={`d-flex justify-content-between ${style.divIconsPersonCard}`}
          >
            <span className={`material-icons ${style.editButton}`} onClick={() => editPerson(props.personDetails)}>edit</span>
            <span
              className={`material-icons ${style.viewButton}`}
              onClick={() => viewPerson(props.personDetails)}
            >
              visibility
            </span>
            <span
              className={`material-icons ${style.deleteButton}`}
              onClick={() => deletePerson(props.personDetails)}
            >
              delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
