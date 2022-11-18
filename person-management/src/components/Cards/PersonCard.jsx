import React from "react";
import personImage from "./../../images/personImage.jfif";
import style from './../../css/AllPersons.module.css'

const PersonCard = () => {
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
            <h4 className={style.namePersonCard}>Bruno</h4>
          </div>
          <div className="d-flex justify-content-center">
            <h4 className={style.namePersonCard}>Barbosa</h4>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <span className={`material-icons ${style.editButton}`}>edit</span>
            <span className={`material-icons ${style.deleteButton}`}>delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
